import React from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'


import img1 from './assets/cart/img1.jpeg'
import img2 from './assets/cart/img2.jpeg'
import img3 from './assets/cart/img3.jpeg'
import img4 from './assets/cart/img4.jpeg'
import img5 from './assets/cart/img5.jpeg'
import img6 from './assets/cart/img6.jpeg'
import img7 from './assets/cart/img7.jpeg'
import img8 from './assets/cart/img8.jpeg'

const products = [
 {
  id: 1,
  image: img1,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 2,
  image: img2,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 3,
  image: img3,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 4,
  image: img4,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 5,
  image: img5,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 6,
  image: img6,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 7,
  image: img7,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 8,
  image: img8,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
]

function App() {
 return (
  <div className='app'>
   <Header />
   <main className='main'>
    {products.map(product => (
     <Cart
      key={product.id}
      image={product.image}
      title={product.title}
      desc={product.desc}
      price={product.price}
     />
    ))}
   </main>
   {/* <Btn /> */}
  </div>
 )
}

export default App