import React from "react";
import { Button, Flex } from "antd";

import './QuantProducts.css'

const QuantProducts = () => {
    return (
        <div className="quant_products">
            <span>View: </span>
            <Button type="primary"> 8 </Button>
            <Button> 16 </Button>
            <Button> 20 </Button>
        </div>
    )
}

export default QuantProducts