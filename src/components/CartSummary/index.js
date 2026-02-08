// eslint-disable-next-line import/no-unresolved
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'

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
          <Popup
            trigger={
              <button type="button" className="check-out">
                Checkout
              </button>
            }
            modal
          >
            {close => (
              <PaymentPopup
                close={close}
                totalItems={items}
                totalPrice={orderTotal}
              />
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
