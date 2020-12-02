import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen/ProductScreen";
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
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
