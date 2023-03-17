import React from "react";
import './App.css';
import styles from "./style";
import { Navbar, Heroa, Added, Footer, Button, Cocktails, Premium } from "./Components";

const App = () => (
    <div className="bg-black w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>
        <div className={`bg-black`}>
            <div >
            <Heroa/>
            </div>
        </div>
        
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <Added/>
            <Footer/>
            <Button/>
            <Cocktails/>
            <Premium/>
            </div>
        </div>

    </div>
);

export default App

