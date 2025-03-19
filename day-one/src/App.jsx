import Navbar from "./Components/Navbar";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Cart = () => {
  const items = ["Wireless Earbuds", "Monitor", "SmartPhone", "Headphones"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 ? (
        <>
          <h2>You have {items.length} items in your Cart</h2>
          <ul>
            {items.map((item) => (
              <li key={Math.random()}>{item}</li> // Ensure you return the list item
            ))}
          </ul>
        </>
      ) : (
        <h2>Your cart is empty!</h2>
      )}
      <br />
    </div>
  );
};

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "90px", marginLeft: "20px" }}>
        {/* <Password isValid={false} /> */}
        <Cart />
      </div>
    </div>
  );
};

export default App;
