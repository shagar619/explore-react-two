import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'



const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])


    return (
        <div className="bottle-container">
            <h2>Total Bottles : {bottles.length}</h2>

            <div>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>

        </div>
    );
};

export default Bottles;