import React, { useEffect } from "react";
import { Button, Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";

import { useButomCountCard, useCards } from "../../store";

import CardProduct from "../cardProduct/CardProduct";

import "./CountCards.css";

const CountCards = (props) => {
  const { quantityCard, typeDef, typeNorm, typeMax, defaults, normal, max } =
    useButomCountCard();
  const { cards, getCard } = useCards();

  const { Search } = Input;

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
  };

  console.log(cards);
  console.log(quantityCard);

  const elements = cards.map((item) => {
    return <CardProduct data={item} key={item.id} />;
  });

  useEffect(() => {
    console.log("Render component")
    console.log(getCard)
    getCard(quantityCard, defaults)();
  }, []);

  return (
    <div>
      <div className="count_cards">
        <span>View: </span>
        <Button type={typeDef} onClick={getCard(quantityCard, defaults)}>
          {" "}
          8{" "}
        </Button>
        <Button type={typeNorm} onClick={getCard(quantityCard, normal)}>
          {" "}
          16{" "}
        </Button>
        <Button type={typeMax} onClick={getCard(quantityCard, max)}>
          {" "}
          20{" "}
        </Button>

        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="products_container">{elements}</div>
    </div>
  );
};

export default CountCards;
