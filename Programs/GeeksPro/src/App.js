// import { Home } from "./page";
// import './style.css'
// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';

// Компонент для отображения товара
const Product = ({ product, addToCart }) => (
  <div className="flex">
    <div className="col-6">
      <img src={product.img} className="shoe" alt={product.title} />
    </div>
    <div className="col-6">
      <h1 className="text">{product.title}</h1>
      <p className="text text-p">{product.body}</p>
      <h3 className="text price">{product.price}</h3>
      <button className="btn" onClick={() => addToCart(product)}>
        Добавить в корзину
      </button>
    </div>
  </div>
);

// Компонент для корзины
const Cart = ({ cart, onRemoveItem, onOrder }) => (
  <div>
    {cart.length === 0 ? (
      <p>Корзина пуста!</p>
    ) : (
      cart.map((item, index) => (
        <div className="cardBox" key={index}>
          <img src={item.img} className="cardBox-img" alt={item.title} />
          <div className="cardBox-info">
            <p className="cardBox-text">{item.title}</p>
            <p className="cardBox-text">{item.price}</p>
          </div>
          <img
            src="./img/delete.png"
            className="delete"
            onClick={() => onRemoveItem(index)}
            alt="Удалить"
          />
        </div>
      ))
    )}
    {cart.length > 0 && (
      <button onClick={onOrder} className="zakaz">
        Оформить заказ
      </button>
    )}
  </div>
);

// Главный компонент
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState('red');
  const [orderFormVisible, setOrderFormVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', address: '' });

  useEffect(() => {
    // Получаем данные о товарах
    fetch("http://localhost:4000/shoe")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Функция для удаления товара из корзины
  const removeItemFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Отправка заказа
  const handleOrder = () => {
    setOrderFormVisible(true);
  };

  // Отправка данных о заказе
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Обработчик отправки данных заказа
    console.log('Заказ отправлен', userInfo);
    // Сброс корзины
    setCart([]);
    setOrderFormVisible(false);
    alert('Мы обрабатываем ваш заказ');
  };

  return (
    <div>
      <div>
        {/* Кнопки для выбора цвета */}
        {['red', 'bisque', 'white', 'blue', 'gray', 'green', 'brown'].map((color) => (
          <button key={color} onClick={() => setSelectedColor(color)}>
            {color}
          </button>
        ))}
      </div>

      {/* Отображение товаров */}
      <div>
        {products.length > 0 && (
          <Product
            product={products.find((product) => product.color === selectedColor)}
            addToCart={addToCart}
          />
        )}
      </div>

      {/* Корзина */}
      <Cart cart={cart} onRemoveItem={removeItemFromCart} onOrder={handleOrder} />

      {/* Форма для оформления заказа */}
      {orderFormVisible && (
        <form onSubmit={handleSubmitOrder}>
          <div className="form-border">
            <p>Имя</p>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <p>Номер</p>
            <input
              type="number"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
            <p>Адрес</p>
            <input
              type="text"
              value={userInfo.address}
              onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
            />
            <button type="submit">Отправить заказ</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
