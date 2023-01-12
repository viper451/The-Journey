import React from 'react';
import './store.css'
function Store(props) {
    return (
        <div>
        
        <div className="row">
          <div className="column"  style={{background:"#aaa"}}>
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column"  style={{background:"#bbb"}}>
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div className="column" style={{background:"#ccc"}}>
            <h2>Cart</h2>
            <p>Some text..</p>
          </div>
        </div>
        </div>
    );
}

export default Store;