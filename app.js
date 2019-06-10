// // TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList />
  </div>
);

const GroceryList = () => (
  <ol>
    <li>Cucumber</li>
    <li>Kale</li>
  </ol>
);

ReactDOM.render(<App />, document.getElementById("app"));