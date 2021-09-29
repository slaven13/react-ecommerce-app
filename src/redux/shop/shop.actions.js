import { ShopActionTypes } from "./shop.types";
import { collection, getDocsFromServer } from "@firebase/firestore";
import {
  firebaseFirestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collections) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  const collectionRef = collection(firebaseFirestore, "collections");

  return (dispatch) => {
    dispatch(fetchCollectionsStart());

    getDocsFromServer(collectionRef)
      .then((snapshot) => {
        const transformedCollections = convertCollectionSnapshotToMap(snapshot);

        dispatch(fetchCollectionsSuccess(transformedCollections));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
