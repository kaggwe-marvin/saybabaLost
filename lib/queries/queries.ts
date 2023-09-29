// queries.ts
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
import { db } from "@/firebase/firebase"; // Import your Firestore instance

// Basic Query: Retrieve all documents in a collection
export const basicQuery = async () => {
  const q = query(collection(db, "lost"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Where Query: Filter documents based on a specific field and value
export const whereQuery = async (field: string, value: any) => {
  const q = query(collection(db, "lost"), where(field, "==", value));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Array Union Query: Add elements to an array field in a document
export const arrayUnionQuery = async (
  documentId: string,
  elementsToAdd: string[]
) => {
  const documentRef = doc(db, "lost", documentId);
  await updateDoc(documentRef, {
    arrayField: arrayUnion(...elementsToAdd),
  });
};

// Array Remove Query: Remove an element from an array field in a document
export const arrayRemoveQuery = async (
  documentId: string,
  elementToRemove: string
) => {
  const documentRef = doc(db, "lost", documentId);
  await updateDoc(documentRef, {
    arrayField: arrayRemove(elementToRemove),
  });
};

// Batched Writes: Perform multiple read and write operations as a single unit
export const batchedWrites = async () => {
  const batch = writeBatch(db);

  const documentRef = doc(db, "lost", "yourDocumentId");
  batch.update(documentRef, { fieldToUpdate: "newValue" });

  const anotherDocumentRef = doc(db, "anotherCollection", "anotherDocumentId");
  batch.delete(anotherDocumentRef);

  await batch.commit();
};

// StartAt and EndAt Query: Retrieve documents within a specified range
export const startAtEndAtQuery = async (
  startDocumentId: string,
  endDocumentId: string
) => {
  const q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    startAt(startDocumentId),
    endAt(endDocumentId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Composite Indexing Query: Optimize query performance with composite indexes
export const compositeIndexingQuery = async () => {
  // Define the composite index in the Firebase Console
  const q = query(
    collection(db, "lost"),
    where("field1", "==", "value1"),
    where("field2", "==", "value2")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Collection Group Query: Query across all collections with the same name
export const collectionGroupQuery = async () => {
  const q = query(collectionGroup(db, "lostName"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Query with Ordering: Retrieve documents with ordering
export const orderByQuery = async (fieldToOrder: string) => {
  const q = query(collection(db, "lost"), orderBy(fieldToOrder));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Limit Query: Retrieve a limited number of documents
export const limitQuery = async (limitValue: number) => {
  const q = query(collection(db, "lost"), limit(limitValue));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Start After Query: Retrieve documents starting after a specific document
export const startAfterQuery = async (startAfterDocumentId: string) => {
  const q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    startAfter(startAfterDocumentId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// End Before Query: Retrieve documents ending before a specific document
export const endBeforeQuery = async (endBeforeDocumentId: string) => {
  const q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    endBefore(endBeforeDocumentId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Composite Query: Combine multiple conditions in a query
export const compositeQuery = async (
  field1: string,
  value1: any,
  field2: string,
  value2: any
) => {
  const q = query(
    collection(db, "lost"),
    where(field1, "==", value1),
    where(field2, "==", value2)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Array Contains Query: Retrieve documents where an array contains a specific value
export const arrayContainsQuery = async (
  fieldName: string,
  valueToFind: any
) => {
  const q = query(
    collection(db, "lost"),
    where(fieldName, "array-contains", valueToFind)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Snapshot Listener: Listen for real-time changes to a document
export const snapshotListener = (documentId: string) => {
  const docRef = doc(db, "lost", documentId);
  const unsubscribe = onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      // Document data is in doc.data()
      console.log("Document data:", doc.data());
    } else {
      // Document doesn't exist
      console.log("Document does not exist");
    }
  });

  // To stop listening, call the unsubscribe function
  return unsubscribe;
};

// Paginated Query: Retrieve documents in paginated batches
export const paginatedQuery = async (pageSize: number, startAfterDoc?: any) => {
  let q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    limit(pageSize)
  );

  if (startAfterDoc) {
    q = query(
      collection(db, "lost"),
      orderBy("fieldToOrderBy"),
      startAfter(startAfterDoc)
    );
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Subcollection Query: Query documents within a subcollection
export const subcollectionQuery = async (
  parentDocumentId: string,
  subcollectionName: string
) => {
  const parentDocRef = doc(db, "lost", parentDocumentId);
  const subcollectionRef = collection(parentDocRef, subcollectionName);

  const q = query(subcollectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Compound Query: Combine multiple conditions with logical operators
export const compoundQuery = async (
  field1: string,
  value1: any,
  field2: string,
  value2: any
) => {
  const q = query(
    collection(db, "lost"),
    where(field1, "==", value1),
    where(field2, ">=", value2)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Get a Document by ID
export const getDocumentById = async (documentId: string) => {
  const docRef = doc(db, "lost", documentId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// Timestamp Query: Retrieve documents with a timestamp field within a specific range
export const timestampQuery = async (
  startTimestamp: Timestamp,
  endTimestamp: Timestamp
) => {
  const q = query(
    collection(db, "lost"),
    where("timestampField", ">=", startTimestamp),
    where("timestampField", "<=", endTimestamp)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Array Contains Any Query: Retrieve documents where an array contains any of the specified values
export const arrayContainsAnyQuery = async (
  fieldName: string,
  valuesToFind: any[]
) => {
  const q = query(
    collection(db, "lost"),
    where(fieldName, "array-contains-any", valuesToFind)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Field Grouping Query: Group documents based on a specific field
export const fieldGroupingQuery = async (groupingField: string) => {
  const q = query(collection(db, "lost"), orderBy(groupingField), limit(10));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// In Query: Retrieve documents where a field matches any value in an array
export const inQuery = async (field: string, values: any[]) => {
  const q = query(collection(db, "lost"), where(field, "in", values));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Case-Insensitive Query: Perform a case-insensitive search
export const caseInsensitiveQuery = async (
  field: string,
  searchQuery: string
) => {
  const q = query(
    collection(db, "lost"),
    where(field, ">=", searchQuery.toLowerCase()),
    where(field, "<=", searchQuery.toLowerCase() + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Complex Compound Query: Combine multiple conditions with logical operators and ordering
export const complexCompoundQuery = async (
  field1: string,
  value1: any,
  field2: string,
  value2: any,
  orderByField: string
) => {
  const q = query(
    collection(db, "lost"),
    where(field1, "==", value1),
    where(field2, ">=", value2),
    orderBy(orderByField)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};
// Range Query: Retrieve documents within a numeric range
export const rangeQuery = async (
  field: string,
  minValue: number,
  maxValue: number
) => {
  const q = query(
    collection(db, "lost"),
    where(field, ">=", minValue),
    where(field, "<=", maxValue)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Not Equal Query: Retrieve documents where a field is not equal to a specific value
export const notEqualQuery = async (field: string, value: any) => {
  const q = query(collection(db, "lost"), where(field, "!=", value));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// OrderBy Descending Query: Retrieve documents in descending order
export const orderByDescendingQuery = async (fieldToOrder: string) => {
  const q = query(collection(db, "lost"), orderBy(fieldToOrder, "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Pagination with Start After Query: Retrieve the next page of documents
export const paginationStartAfterQuery = async (
  pageSize: number,
  startAfterDocId: string
) => {
  const q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    startAfter(startAfterDocId),
    limit(pageSize)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Pagination with End Before Query: Retrieve the previous page of documents
export const paginationEndBeforeQuery = async (
  pageSize: number,
  endBeforeDocId: string
) => {
  const q = query(
    collection(db, "lost"),
    orderBy("fieldToOrderBy"),
    endBefore(endBeforeDocId),
    limitToLast(pageSize)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Document Exists Query: Check if a document with a specific ID exists
export const documentExistsQuery = async (documentId: string) => {
  const docRef = doc(db, "lost", documentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

// Nested Field Query: Retrieve documents based on a nested field
export const nestedFieldQuery = async (nestedField: string, value: any) => {
  const q = query(
    collection(db, "lost"),
    where(`nested.${nestedField}`, "==", value)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Distinct Values Query: Retrieve distinct values of a field
export const distinctValuesQuery = async (fieldToDistinct: string) => {
  const q = query(collection(db, "lost"), orderBy(fieldToDistinct));
  const querySnapshot = await getDocs(q);

  const distinctValues = new Set();
  querySnapshot.forEach((doc) => {
    distinctValues.add(doc.data()[fieldToDistinct]);
  });

  return Array.from(distinctValues);
};

// Count Documents Query: Count the number of documents that meet a condition
export const countDocumentsQuery = async (field: string, value: any) => {
  const q = query(collection(db, "lost"), where(field, "==", value));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size;
};

// Compound OR Query: Retrieve documents that match any of several conditions
export const compoundOrQuery = async (
  conditions: { field: string; value: any }[]
) => {
  let q = query(collection(db, "lost"));

  conditions.forEach((condition) => {
    q = query(q, where(condition.field, "==", condition.value));
  });

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Distinct Field Values Query: Retrieve distinct values of multiple fields
export const distinctFieldValuesQuery = async (fields: string[]) => {
  const q = query(collection(db, "lost"), orderBy(fields[0]));
  const querySnapshot = await getDocs(q);

  const uniqueValues = new Map();

  querySnapshot.forEach((doc) => {
    const values = fields.map((field) => doc.data()[field]);
    uniqueValues.set(doc.id, values);
  });

  return uniqueValues;
};
// Document Snapshot Query: Retrieve a single document by ID
export const documentSnapshotQuery = async (documentId: string) => {
  const docRef = doc(db, "lost", documentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// Nested Array Query: Retrieve documents based on values within a nested array
export const nestedArrayQuery = async (nestedField: string, value: any) => {
  const q = query(
    collection(db, "lost"),
    where(`nestedArray.${nestedField}`, "array-contains", value)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Exclusion Query: Exclude documents that meet certain conditions
export const exclusionQuery = async (
  excludedField: string,
  excludedValue: any
) => {
  const q = query(
    collection(db, "lost"),
    where(excludedField, "!=", excludedValue)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Compound AND Query: Retrieve documents that match all specified conditions
export const compoundAndQuery = async (
  conditions: { field: string; value: any }[]
) => {
  let q = query(collection(db, "lost"));

  conditions.forEach((condition) => {
    q = query(q, where(condition.field, "==", condition.value));
  });

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Date Range Query: Retrieve documents within a specified date range
export const dateRangeQuery = async (startDate: Date, endDate: Date) => {
  const q = query(
    collection(db, "lost"),
    where("dateField", ">=", startDate),
    where("dateField", "<=", endDate)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};

// Array Contains Any Query: Retrieve documents where an array contains any of multiple values
export const arrayContainsAnyQueryOf = async (field: string, values: any[]) => {
  const q = query(
    collection(db, "lost"),
    where(field, "array-contains-any", values)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
};
