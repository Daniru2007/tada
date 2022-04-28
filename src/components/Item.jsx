import "./css/Item.css";
import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Item(props) {
    const deleteItem = (e) => {
        props.delete(props.index);
    };
    return (
        <div className="item">
            <h4>
                {props.index + 1}.{props.name}
            </h4>
            <Button color="error" variant="contained" onClick={deleteItem}>
                <DeleteIcon />
            </Button>
        </div>
    );
}

Item.defaultProps = {
    name: "default",
    index: 0,
};

export default Item;
