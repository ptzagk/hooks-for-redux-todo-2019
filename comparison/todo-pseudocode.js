// (NOTE: non-working, psuedo-javascript)
// This file show the essential logic of the TODO app.

/************************************
 * CLIENT-SIDE-STATE CONCEPT (REDUX)
************************************/
let list = [
  { id: 1, text: "clean the house" },
  { id: 2, text: "buy milk" }
];

// REDUCERS
const _addItem    = (list, item) => [...list, { ...item, id: uniqueId() }]
const _deleteItem = (list, item) => list.filter(todo => todo.id !== item.id)

// STUBS: 
const useState   = ()     => list // React hook
const deleteItem = (item) => null // dispatcher
const addItem    = (item) => null // dispatcher

/************************************
 * USER-INTERFACE CONCEPT (REACT)
************************************/
const ToDoItem = ({ item }) =>
  <li>
    {item.text}
    <button onClick={ deleteItem }/>
  </li>

const ToDo = () =>
  <div>
    <ul>
      {useList().map(item => (
        <ToDoItem key={ item.id } item={ item } />
      ))}
    </ul>

    <input type="text"/>
    <button onClick={ addItem }/>
  </div>
