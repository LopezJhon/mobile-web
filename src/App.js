import React from 'react';

import {Switch, Route} from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Navbar from './component/Navbar/navbar';
import Homepage from "./page/homepage/homepage.js";
import ShopPage from './page/shoppage/shoppage';
import Mens from './page/menspage/menspage';
import SignInSignUpPage from './page/signinsignuppage/signinsignuppage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        currentUser: null
    };
  }
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({
        currentUser: userAuth
      })
    });
  };
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  };
  render() {
    return (
      <div className="app">
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/mens' component={Mens} />
          <Route path='/Login' component={SignInSignUpPage}/>
        </Switch>
      </div>
    );
  };
};

export default App;
