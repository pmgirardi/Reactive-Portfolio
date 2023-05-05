import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
    return( 
        <div className="container is-center">


        <div>
            {}
            <Header />
        </div> 
       <div>
        <PortfolioContainer/>
       </div>
        <div>
            <Footer />
        </div>

        </div>
    );
}

export default App;