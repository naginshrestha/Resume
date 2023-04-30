import {  addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    setDoc,} from "firebase/firestore";
  import { toast } from "react-toastify";
  import { db } from "../firebase-config/firebase-config";

  import {setResume} from '../slice/userResume'


export const addResumeAction = (formData) => async (dispatch) => {
    try {

      const docRef = await addDoc(collection(db, "Resume"), formData);
  
      if (docRef?.id) {
        toast.success("New Resume has been added in the database.");
         dispatch(getResumeAction());
        return;
      }
      toast.error("unable to add the book, try again later.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  export const getResumeAction = () => async (dispatch) => {
    try {

      const q = query(collection(db, "Resume")
      // ,where("uid", "==", uid)
      );
  
      const querySnapshot = await getDocs(q);
      let books = [];

  
      querySnapshot.forEach((doc) => {
        const { id } = doc;
  
        const data = { ...doc.data(), id };
        books.push(data);

      
      });
     dispatch(setResume(books));
   
      
    } catch (error) {
      toast.error(error.message);
    }
  };