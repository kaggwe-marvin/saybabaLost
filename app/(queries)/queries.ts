// queries.ts
import { db } from "@/firebase/firebase";
import { basicQueryProps } from "@/typings";
import {
  collection,
  query,
  limit,
  getDocs,
  doc,
  getDoc,
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
// get all documents back
export const getAll = async () => {
  try {
    const dataRef = collection(db, "lost");
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  } catch (error) {
    console.error("Error fetching all data:", error);
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
