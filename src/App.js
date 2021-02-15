import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector} from 'reselect'

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Navbar from './component/Navbar/navbar';
import Homepage from "./page/homepage/homepage.js";
import ShopPage from './page/shoppage/shoppage';
import SignInSignUpPage from './page/signinsignuppage/signinsignuppage';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './page/checkoutpage/checkoutpage';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        currentUser: null
    };
  }
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    });
  };
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  };
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/login' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage/>
              )
            }
          />
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
