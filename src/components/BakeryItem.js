// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <h1>Name: {props.item.name}</h1>
            <h2>Price: {props.item.price}</h2>
            <p> Description: {props.item.description}</p>
            <img src={props.item.image}/>
            <button onClick={() => {props.addToCart(props.item)}} Add to Cart />
        </div>
    )
}

export default BakeryItem;