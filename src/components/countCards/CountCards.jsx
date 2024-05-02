import React, {useEffect} from "react";
import { Button, Input, Space, Select } from "antd";
import axios from "axios";

import { useButomCountCard, useCards } from "../../store";

import CardProduct from '../cardProduct/CardProduct'

import './CountCards.css'

const CountCards = (props) => {

    const { quantityCard, typeDef, typeNorm, typeMax, defaults, normal, max } = useButomCountCard()
    const { cards, getCard, categories, getCategorues, selectCategory } = useCards()

    const { Search } = Input

    const handleChange = (value) => {
        console.log(cards);
        selectCategory(quantityCard, value)();
      };

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
    }
    
    const elements = cards.map(item => {
        return(
            <CardProduct data={item} key={item.id} />
        )
    })

    useEffect(() => {
        console.log("Render component")
        // console.log(categories)
        getCard(quantityCard, defaults)();
        // getCategorues;
      }, []);

    return (
        <div>
            <div className="count_cards">
                <div className="buttons">
                    <span>View: </span>
                    <Button type={typeDef} onClick={ getCard(quantityCard, defaults) }> 8 </Button>
                    <Button type={typeNorm} onClick={ getCard(quantityCard, normal) }> 16 </Button>
                    <Button type={typeMax} onClick={ getCard(quantityCard, max) }> 20 </Button>
                </div>

                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{
                        minWidth: 200,
                        maxWidth: 500
                    }}
                />
                <Select
                    defaultValue="nothing"
                    style={{
                        width: 250,
                    }}
                    onChange={handleChange}
                    options={categories}
                />
            </div>
            <div className="products_container">
                {elements}
            </div>
        </div>
    )
}

export default CountCards