import React, { useState, useEffect } from "react";

import Products from "./Products";

function Cart() {
    const [total, setTotal] = useState(0);
    const [bbctr, setBbctr] = useState(0);
    const [shoectr, setShoectr] = useState(0);
    const [hdbdctr, setHdbdctr] = useState(0);
    
    function updateTotal () {
        setTotal(total => total + parseInt(bbctr) + parseInt(shoectr) + parseInt(hdbdctr))
    };

    useEffect(()=>{
        setTotal(parseInt(bbctr) + parseInt(shoectr) + parseInt(hdbdctr))
    }, [bbctr,shoectr,hdbdctr]);

    return (
      <div className="App">
        <h1>This is the Shopping Page!</h1>
        <div>
            <div>Items in cart: {total}</div>
            <button>Checkout and Pay</button>
            <Products bballs={bbctr} shoes={shoectr} headbnds={hdbdctr} setbballs={setBbctr} setshoes={setShoectr} setheadbands={setHdbdctr}/>
        </div>
      </div>
    );
  }
  
  export default Cart;