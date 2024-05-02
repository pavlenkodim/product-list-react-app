import React, {useEffect} from "react";
import { Button, Input, Space, Select } from "antd";
import axios from "axios";

import { useCards, useButtonsLimit } from "../../store";

import CardProduct from '../cardProduct/CardProduct'

import './CountCards.css'

const CountCards = (props) => {

    const { limit, typeDef, typeNorm, typeMax, defaults, normal, max } = useButtonsLimit()
    const { cards, getCard, categories, getCategorues, selectCategory, searchCard } = useCards()

    const { Search } = Input

    const handleChange = (value) => {
        console.log(cards);
        selectCategory(limit, value)();
      };

    const onSearch = (value, _e, info) => {
        searchCard(value)();
    }
    
    const elements = cards.map(item => {
        return(
            <CardProduct data={item} key={item.id} />
        )
    })

    useEffect(() => {
        console.log("Render component")

        getCard(limit, defaults)();
        // getCategorues; //TODO: Не работате, похоже не корректный ответ от сервера.
      }, []);

    return (
        <div>
            <div className="count_cards">
                <div className="buttons">
                    <span>View: </span>
                    <Button type={typeDef} onClick={ getCard(8, defaults) }> 8 </Button>
                    <Button type={typeNorm} onClick={ getCard(16, normal) }> 16 </Button>
                    <Button type={typeMax} onClick={ getCard(20, max) }> 20 </Button>
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