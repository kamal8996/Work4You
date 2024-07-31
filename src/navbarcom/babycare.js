
import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import Card from './Card';
import Data from "../db.json";

const Babycare = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        const babysitters = Data.product.filter((item) => item.service === 'Babysitter');
        setData(babysitters);
    }, []);

    const filterResult = (catItem) => {
        const result = Data.product.filter((curData) => curData.service === catItem);
        setData(result);
    };

    return (
        <div className='container'>
            <div className='row' style={{ width: "100%", marginTop: "-3.2rem" }}>
                <div className='col-12'>
                   
                </div>

                <div className='col-12'>
                    <div className='row' style={{ width: "100%" }}>
                        {data.map((prod) => (
                            <Card prod={prod} key={prod.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Babycare;
