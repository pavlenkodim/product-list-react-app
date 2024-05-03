import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

import './CardProduct.css'

const CardProduct = ({ data }) => {
    return (
        <div className="card">
            <Card style={{width: 250 }} cover={<img alt={data.title} src={data.image} style={{height: 300}}/>}> 
                <Meta title={data.title} description={data.category} />
                <div>
                    <h2>{data.price} $</h2> 
                    <div>
                        {data.description.length > 50 ? data.description.slice(0, 50) : data.description} <a href={`/product/${data.id}`} > more...</a>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>Raiting: {data.rating.rate}</span>
                        <span>Count: {data.rating.count}</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardProduct