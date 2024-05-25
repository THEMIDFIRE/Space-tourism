import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./Destination.scss"


const Destination = () => {

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add('destination-bg');
    }, []);
    //get data from data.json
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setData(data.destinations));
    }, []);
    console.log(data)

    return (
        <section className="destination">
            <p className="sub-H1"><span className="num">01</span>pick your destination</p>
        </section>
    );
}
export default Destination;