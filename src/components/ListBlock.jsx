import { useState } from "react";
import uuid from "react-uuid";
import List from "./List";

const initItems = [];

function ListBlock() {
    const [items, setItems] = useState(initItems);
    const [inputText, setInputText] = useState('');

    const addItem = () => {
        const newItem = {
            id: uuid(),
            text: inputText
        };
        setItems([...items, newItem]);
        setInputText('');
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return <>
        <span>CheckList</span>
        <br />
        <List items={items} setItems={setItems} />
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={addItem}>Добавить</button>
    </>
}

export default ListBlock;