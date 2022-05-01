import "./css/List.css";
import React, { useState } from "react";
import Item from "./Item";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

function List(props) {
    const [ListTopic, setListTopic] = useState(props.name);
    const [data, setData] = useState({ items: [] });
    const [topic, setTopic] = useState("");
    const addItems = (e) => {
        e.preventDefault();
        if (topic === "") {
            return;
        }
        let tempItems = data.items;
        tempItems.push({ topic: topic });
        setData({ items: tempItems });
        setTopic("");
    };

    const deleteItems = (index) => {
        let items = data.items;
        items.splice(index, 1);
        setData({ items: items });
    };
    const updateItems = (index, name) => {
        let items = data.items;
        items[index] = { topic: name };
        setData({ items: items });
    };
    const deleteItem = (e) => {
        props.delete(props.index);
    };
    const updateListTopic = (e) => {
        setListTopic(e.target.value);
        props.update(props.index, e.target.value);
    };
    return (
        <div className="list">
            <div className="list__inputField">
                <input
                    type="text"
                    value={ListTopic}
                    onChange={updateListTopic}
                    className="listtopic__input"
                />

                <Button color="error" variant="contained" onClick={deleteItem}>
                    <DeleteIcon />
                </Button>
            </div>
            <div className="list__todo">
                {data.items.map((item, index) => {
                    return (
                        <Item
                            name={item.topic}
                            index={index}
                            delete={deleteItems}
                            update={updateItems}
                        />
                    );
                })}
            </div>
            <form className="addItemField">
                <TextField
                    required
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    label="TODO"
                    variant="filled"
                />
                <Button type="submit" onClick={addItems} variant="contained">
                    add
                </Button>
            </form>
        </div>
    );
}

export default List;
