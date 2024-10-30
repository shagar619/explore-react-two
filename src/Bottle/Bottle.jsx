import './bottle.css'

const Bottle = ({bottle}) => {
    // console.log(bottle);

    const {name, img, price} = bottle;
    return (
        <div className='bottle-style'>
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : $ {price}</p>
            <br />
            <button>Purchase</button>
        </div>
    );
};

export default Bottle;