import { Link } from "react-router-dom";

const Item = (props) => {
    const id = props.data.id;
    const data = props.data;
    return (
        <section>
            <img></img>
            <h1>{props.data.brand}</h1>
            <p>I like this shoe</p>
            <Link to={{
                pathname: 'shop:' + id,
                state: { data }
            }}>Go to shoe</Link>
        </section>
    );
}

export default Item;