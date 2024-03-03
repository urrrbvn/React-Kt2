import ProductItem from './components/ProductItem'
import './App.css';
import { useState } from 'react';

function App() {

  const data = [ 

    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]

    const[itemList, setList] = useState(data)

    function addNewProd(){
      let newProd = prompt('введите название товара', '')
      let newPrice = prompt('введите цену товара', '')
      if(newProd && newPrice){
        setList(prevList => [...prevList, {id: prevList.length + 1, name: newProd, price: parseInt(newPrice), count: 1}])
      }
    }

  return (
  <div className='appCont'>
      <button onClick={addNewProd}>новый товар</button>
      <div className='cardCont'>
      {itemList.map(elem => <ProductItem 
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        price={elem.price}
                        count={elem.count}/>)}
      </div>
  </div>
  );
}

export default App;
