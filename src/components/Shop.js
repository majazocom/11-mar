import Item from './Item';

const Shop = () => {
    let shoes = require('../assets/shoes.json');
    return (
        <section>
            <h1>Stuff</h1>
            <h3>Behold my stuff</h3>
            {
                shoes.map((shoe, index) => <Item key={index} data={shoe} />)
            }
        </section>
    );
}

export default Shop;