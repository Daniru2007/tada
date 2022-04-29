import "./css/Item.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Item(props) {
    const [todo, setTodo] = useState(props.name);
    const deleteItem = (e) => {
        props.delete(props.index);
    };
    const updateName = (e) => {
        setTodo(e.target.value);
        props.update(props.index, e.target.value);
    };
    return (
        <div className="item">
            <input
                type="text"
                value={todo}
                onChange={updateName}
                className="item__input"
            />
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
