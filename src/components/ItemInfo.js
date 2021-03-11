const ItemInfo = (props) => {
    const shoeData = props.location.state;
    console.log(shoeData);
    return ( 
        <section>
            <img></img>
            <aside>
                <h1>{shoeData.data.brand}</h1>
                <p>{shoeData.data.name}</p>
                <button>Köp</button>
            </aside>
        </section>
     );
}
 
export default ItemInfo;