import { useState } from 'react';


function ChecklistItem({id, text, changeField, deleteItem}) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  



  return <li>
    <input type="checkbox" checked={isChecked} onChange={() => {setIsChecked(!isChecked)}}/>
    {isChecked ? 
      <span style={{textDecoration: 'line-through'}}>{text}</span>
    : <>{
    isEdit
      ? <input value={text}
        onChange={event => changeField(id, text, event)}
        onBlur={() => setIsEdit(false)} />
      : <span onClick={() => setIsEdit(true)}>{text}</span>
    }</>
    }
    <button onClick={() => {deleteItem(id)}}>Удалить</button>
  </li>
}






function List({items, setItems}) {

  const changeField = (id, text, event) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, text: event.target.value };
      }
    }))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const list_items = items.map((item) => {
    return <ChecklistItem
      key={item.id}
      id={item.id}
      text={item.text}
      changeField={changeField}
      deleteItem={deleteItem}
    />;
  })

return <ul>
  {list_items}
</ul>;

}

export default List;