import React from 'react';
import './contact.css'
import facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';

function Contact(props) {
	return (
	<div >


  
         <div className='bigbox'>
          <div className='heading'><h3>REACH US AT</h3> </div>
         {/* <div>This div element has a height of 100px and a max-width of 500px.</div> */}
         <div className='content'> <h4>info@gmail.com</h4>for any more information support</div>
         <div className='content'> <h4>support@gmail.com</h4>for any more information support</div>
         <div className='content'> <h4>feedback@gmail.com</h4>for any more information support</div>
         <div className='content'> <h4>job@gmail.com</h4>for any more information support</div>
         </div><br/><br/>
         <div className='socialmedia'>
              <p>CONNECT US ON<img src={facebook}/> <img src={insta}/> <img src={twitter}/>  </p>
             </div>
         
            
  </div>
	);
}

export default Contact;