import { takeLatest, call, put, all } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import * as shopActions from "./shop.actions";
import { collection, getDocsFromServer } from "@firebase/firestore";
import {
  firebaseFirestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  const collectionRef = collection(firebaseFirestore, "collections");

  try {
    const collectionsSnapshot = yield getDocsFromServer(collectionRef);
    const transformedCollections = yield call(
      convertCollectionSnapshotToMap,
      collectionsSnapshot
    );

    yield put(shopActions.fetchCollectionsSuccess(transformedCollections));
  } catch (error) {
    yield put(shopActions.fetchCollectionsFailure(error.errorMessage));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
 yield all([call(fetchCollectionsStart)])
}
