function Product(props) {
    function change(e){
        props.set(parseInt(document.getElementById(props.item).value));
    };

    function add(){
        parseInt(document.getElementById(props.item).value++);
    }

    function del(){
        parseInt(document.getElementById(props.item).value--);
    }
    return (
      <div className="App">
        <h3>{props.item}: {props.count}</h3>
        <label htmlFor={props.item}>Quantity:</label>
        <input type='number' id={props.item} name={props.item} defaultValue='0' min='0'></input>
        <button onClick={change}>Add To Cart!</button><br></br>
        <button onClick={del}>-</button><button onClick={add}>+</button>
      </div>
    );
  }
  
  export default Product;