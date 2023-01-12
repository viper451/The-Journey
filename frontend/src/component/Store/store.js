import React,{useState} from 'react';
import './store.css'
import data from '../../data/data'
import Itemsinformation from './ItemsInformation/itemsinformation';
import AddtoCart from './AddtoCart/AddtoCart';
import Displayinformation from './DisplayInformation/displayinformation';

function Store(props) {
  const [info, setinfo] = useState([{  
    'name':'NIKE',
    'index':'0',
     'link':'/shoe.jpg',
     'cost':'$30.00'

},
{
    'name':'NIKE',
    'index':'1',
    'link':'/shoe2.png',
    'cost':'$42.00'
 
},
{
    'name':'ADIDAS',
    'index':'2',
    'link':'/shoe.jpg',
    'cost':'$38.99'
  
},
{
    'name':'ADIDAS',
    'index':'3',
    'link':'/shoe2.png',
    'cost':'$34.99'
},
{
    'name':'REEBOK',
    'index':'4',
    'link':'/shoe.jpg',
    'cost':'$28.99'

},
{
    'name':'REEBOK',
    'index':'5',
    'link':'/shoe2.png',
    'cost':'$19.99'
    
},])
 const [currentIndex, setcurrentIndex] = useState(0)
 const [currentPage, setCurrentPage] = useState(0);
 const [cart, setCart] = useState([]);

const getPrevious  = () => {
  if(currentPage==0)
  {
    setCurrentPage(5)
  }
  else{
        setCurrentPage(Math.abs((currentPage - 1))%6)
  }
  }
    const getNext  = () => {
        setCurrentPage(Math.abs((currentPage + 1))%6)
    }
    // console.log(currentPage)
    const add=(updateData)=>{
       let updatedCart=[...cart, updateData]
       setCart(updatedCart)
    }
    console.log(cart)

  

    return (
        <div>
        
        <div className="row"> 
          <div className="column"  style={{backgroundColor: '#bbb'}} >
            <h2>Column 1</h2>
            {/* <p>{info[0].link} <img src={info[0].link}/></p> */}
            {/* {info.map((information) => (
          <Itemsinformation information={information}  />
        ))} */}
        <Itemsinformation information={info[currentPage]}/>
            <p>Some text..</p>
            <b onClick={getNext}>+</b>
            <b onClick={getPrevious}>-</b>
            <AddtoCart information={info[currentPage]} add={add}/>
          </div>
         
          <div className="column">
            <h2>Cart</h2>
            <Displayinformation cart={cart}/>
          </div>
        </div>
        </div>
    );
}

export default Store;