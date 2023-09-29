// queries.ts
import { db } from "@/firebase/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAt,
  endAt,
  GeoPoint,
  updateDoc,
  arrayUnion,
  doc,
  arrayRemove,
  writeBatch,
  collectionGroup,
  endBefore,
  startAfter,
  getDoc,
  onSnapshot,
  Timestamp,
  limitToLast,
} from "firebase/firestore";

interface basicQueryProps {
  limitCount: number;
}
interface realTimeQueryProps {
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
export const realTimeQuery = ({ limitCount }: realTimeQueryProps) => {
  try {
    const dataRef = collection(db, "lost");
    const q = query(dataRef, limit(limitCount)); // Assuming you have a timestamp field

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => {
        const { id, name, collection, category, region } = doc.data();
        return {
          id,
          name,
          collection,
          category,
          region,
        };
      });

      // Now you can use the 'results' array, which contains the limited and ordered real-time data.
    });

    // Remember to return the unsubscribe function if you want to stop listening to updates.
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching real-time data:", error);
    throw error;
  }
};
