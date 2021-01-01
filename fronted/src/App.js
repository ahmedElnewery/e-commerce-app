import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen/ProductScreen";
import CartScreen from "./components/Screens/CartScreen/CartScreen";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./components/Screens/ProfileScreen/ProfileScreen";

import { Container } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <Container>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />



          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
