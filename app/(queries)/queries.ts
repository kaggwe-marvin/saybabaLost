// queries.ts
import { db } from "@/firebase/firebase";
import { collection, query, limit, getDocs } from "firebase/firestore";

interface basicQueryProps {
  limitCount: number;
}

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
