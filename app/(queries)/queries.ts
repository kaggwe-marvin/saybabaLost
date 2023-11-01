// queries.ts
import { db } from "@/firebase/firebase";
import { basicQueryProps, ReportItem } from "@/typings";
import {
  collection,
  query,
  limit,
  where,
  getDocs,
  doc,
  getDoc,
  orderBy,
  startAt,
} from "firebase/firestore";

// Basic Query: Retrieve all documents in a collection
export const basicQuery = async ({ limitCount }: basicQueryProps) => {
  try {
    const dataRef = collection(db, "lost");
    const q = query(dataRef, limit(limitCount));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Where Query: Filter documents based on a specific field and value
export const whereQuery = async (field: string, value: any) => {
  try {
    const dataRef = collection(db, "lost");
    const q = query(dataRef, where(field, "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  } catch (error) {
    console.error("Error fetching querired data", error);
    throw error;
  }
};

// Get a single document by ID
export const getSingleDocument = async (documentId: string) => {
  try {
    const documentRef = doc(db, "lost", documentId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      // If the document exists, return its data
      return documentSnapshot.data();
    } else {
      // Handle the case where the document doesn't exist
      return null;
    }
  } catch (error) {
    console.error("Error fetching single document:", error);
    throw error;
  }
};

export async function executeSearchQuery(
  searchQuery: string
): Promise<ReportItem[]> {
  const dataRef = collection(db, "lost");
  const q = query(dataRef, where("firstName", "==", searchQuery));

  const querySnapshot = await getDocs(q);

  // Use map to create the results array with IDs
  const results: ReportItem[] = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as ReportItem)
  );

  return results;
}

export async function executeSearchQuery2(
  searchQuery: string
): Promise<ReportItem[]> {
  const dataRef = collection(db, "lost");
  const lowercaseSearchQuery = searchQuery.toLowerCase(); // Convert searchQuery to lowercase

  // Use orderBy to sort by lowercase "firstName"
  const q = query(
    dataRef,
    orderBy("firstNameLowercase"),
    startAt(lowercaseSearchQuery)
  );

  const querySnapshot = await getDocs(q);
  const results: ReportItem[] = [];

  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() } as ReportItem);
  });

  return results;
}
