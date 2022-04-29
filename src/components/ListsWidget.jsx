import React, { useState } from "react";
import List from "./List";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./css/ListsWidget.css";

function ListsWidget() {
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
    return (
        <div className="listWidget">
            <form className="addItemField">
                <TextField
                    required
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    label="TODO List"
                    variant="filled"
                />
                <Button type="submit" onClick={addItems} variant="contained">
                    add
                </Button>
            </form>
            <div className="lists">
                {data.items.map((item, index) => {
                    return (
                        <div>
                            <List
                                name={item.topic}
                                index={index}
                                delete={deleteItems}
                                update={updateItems}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListsWidget;
