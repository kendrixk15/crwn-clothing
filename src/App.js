import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in page/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        //send userAuth back to userRef to check if userAuth is exist or not
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
           console.log(snapShot.data())
           this.setState({
             currentUser: {
               id: snapShot.id,
               ...snapShot.data()
             }
           })
        });
        console.log(this.state)
      }
      this.setState({ currentUser: userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );}
}

export default App;
