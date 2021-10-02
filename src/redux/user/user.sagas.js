import {
  googleProvider,
  firebaseAuth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { UserActionTypes } from "./user.types";
import * as userActions from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(firebaseAuth, googleProvider);
    const userSnapshot = yield call(createUserProfileDocument, user);
    yield put(
      userActions.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActions.signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* emailSignInStart({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const userSnapshot = yield call(createUserProfileDocument, user);
    yield put(
      userActions.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActions.signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInStart);
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const userSnapshot = yield call(createUserProfileDocument, {
      ...user,
      displayName,
    });
    yield put(
      userActions.signUpSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActions.signUpFailure(error.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* signOutStart() {
  try {
    yield firebaseAuth.signOut();
    yield put(userActions.signOutSuccess());
  } catch (error) {
    yield put(userActions.signOutFailure(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStart);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    } else {
      const userSnapshot = yield call(createUserProfileDocument, userAuth);
      yield put(userActions.signInSuccess(userSnapshot));
    }
  } catch (error) {
    yield put(userActions.signInFailure());
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
