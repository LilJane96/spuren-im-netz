import React from "react";
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const muiButton = () => {
    return (
    <Button variant="text" startIcon={<ShoppingCartIcon/>}>
        Add item
    </Button>
    );
};

const Button = () => {
    return (
        <SlButton type="submit">
            TestButton
        </SlButton>
    );
};

export default muiButton();
