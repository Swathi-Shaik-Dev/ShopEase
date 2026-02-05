// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceList = cartList.map(each => {
        const total = each.price * each.quantity
        return total
      })
      const orderTotal = priceList.reduce((acc, each) => acc + each)
      const items = cartList.length

      return (
        <div className="summary">
          <h1 className="order">
            Order Total: <span className="total">{orderTotal}</span>
          </h1>
          <p className="items">{items} Items in cart</p>
          <button type="button" className="check-out">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
