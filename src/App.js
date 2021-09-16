import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/signin_and_signup/signin_and_signup.component";
import { firebaseAuth, firebaseFirestore } from "./firebase/firebase.utils";
import React from "react";
import { onSnapshot, doc } from "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  unsubsribeFromOnSnapshot = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = doc(firebaseFirestore, "users", userAuth.uid);

          this.unsubsribeFromOnSnapshot = onSnapshot(userRef, {
            next: (snapshot) => {
              this.setState(
                {
                  currentUser: {
                    id: snapshot.id,
                    ...snapshot.data(),
                  },
                }
              );
            },
            error: (error) => console.log(error),
          });
        } else {
          this.setState({ currentUser: null });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubsribeFromOnSnapshot();
  }

  render() {
    return (
      <div>
        <Header currentUser={firebaseAuth.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
