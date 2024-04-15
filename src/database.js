import { collection, getDocs } from "firebase/firestore/lite";
import { db } from './firebase';

export const fetchCategoryData = async (categoryName) => {
  try {
    const querySnapshot = await getDocs(collection(db, categoryName));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Error fetching category:', error);
    return [];
  }
};
