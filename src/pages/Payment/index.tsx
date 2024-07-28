export function Payment() {
  return (
    <div>
      <h1>Payment</h1>
      <form>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiry Date" />
        <input type="text" placeholder="CVC" />
      </form>
      <button type="submit">Pay</button>
    </div>
  )
}
