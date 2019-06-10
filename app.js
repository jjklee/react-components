// // TODO

//Component Properties aka "props"
// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={['Cucumber', 'Kale']}/> 
//   </div>
// );

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



//Handling User Events
// var GroceryList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.items[0]}</li>
//       <li onClick={onListItemClick}>{props.items[1]}</li>
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={['Cucumber', 'Kale']}/> 
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



//Making applications interactive with state
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ol>
    {props.items.map((item, key) =>
      <GroceryListItem item={item} key={key}/> 
    )}
  </ol>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale']}/> 
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
