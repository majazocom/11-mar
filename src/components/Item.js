import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <section>
            <img></img>
            <h1>{props.data.brand}</h1>
            <p>I like this shoe</p>
            <Link to='/'>Go to shoe</Link>
        </section>
    );
}

export default Item;