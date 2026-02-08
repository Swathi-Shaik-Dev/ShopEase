import {Component} from 'react'
import './index.css'

class PaymentPopup extends Component {
  state = {
    isCODSelected: false,
    isOrderPlaced: false,
  }

  onSelectCashOnDelivery = () => {
    this.setState({isCODSelected: true})
  }

  onConfirmOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  renderPaymentOptions = () => {
    const {totalItems, totalPrice, close} = this.props
    const {isCODSelected} = this.state

    return (
      <>
        <h1 className="payment-heading">Select Payment Method</h1>

        <ul className="payment-options-list">
          <li key="card">
            <input id="card" type="radio" disabled />
            <label htmlFor="card">Card</label>
          </li>
          <li key="net">
            <input id="net" type="radio" disabled />
            <label htmlFor="net">Net Banking</label>
          </li>
          <li key="upi">
            <input id="upi" type="radio" disabled />
            <label htmlFor="upi">UPI</label>
          </li>
          <li key="wallet">
            <input id="wallet" type="radio" disabled />
            <label htmlFor="wallet">Wallet</label>
          </li>
          <li key="cash">
            <input
              id="cash"
              type="radio"
              name="payment"
              onChange={this.onSelectCashOnDelivery}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </li>
        </ul>
        <h1 className="summary-head">Order Summary</h1>
        <div className="order-summary">
          <p>Items: {totalItems}</p>
          <p>Total Price: ₹{totalPrice}</p>
        </div>

        <div className="close-container">
          <button
            type="button"
            className="confirm-order-button"
            disabled={!isCODSelected}
            onClick={this.onConfirmOrder}
          >
            Confirm Order
          </button>
          <button className="cl-btn" type="button" onClick={close}>
            Close
          </button>
        </div>
      </>
    )
  }

  renderSuccessMessage = () => {
    const {close} = this.props

    return (
      <>
        <h1 className="success-message">
          Your order has been placed successfully
        </h1>
        <button className="cl-btn" type="button" onClick={close}>
          Close
        </button>
      </>
    )
  }

  render() {
    const {isOrderPlaced} = this.state

    return (
      <div className="payment-popup-container">
        {isOrderPlaced
          ? this.renderSuccessMessage()
          : this.renderPaymentOptions()}
      </div>
    )
  }
}

export default PaymentPopup
