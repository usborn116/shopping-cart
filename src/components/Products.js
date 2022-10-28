import Product from "./Product";

function Products(props) {
    let items = ['Basketballs', 'Shoes', 'Headbands']
    return (
      <div className="App">
        <h2>Available Products:</h2>
        <Product item={items[0]} count={props.bballs} set={props.setbballs}/>
        <Product item={items[1]} count={props.shoes} set={props.setshoes}/>
        <Product item={items[2]} count={props.headbnds} set={props.setheadbands}/>
      </div>
    );
  }
  
  export default Products;