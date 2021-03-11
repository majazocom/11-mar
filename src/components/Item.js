import { Link } from "react-router-dom";

const Item = (props) => {
    const id = props.data.id;
    return (
        <section>
            <img></img>
            <h1>{props.data.brand}</h1>
            <p>I like this shoe</p>
            <Link to={ '/shop:' + id }>Go to shoe</Link>
        </section>
    );
}

export default Item;