import Todo from "./Todo";

const Todos = (props)=>{
    const { todos, setTodos } = props;
    return <ul>
        {todos.map(todo=>{
            return <Todo key={todo.id} id={todo.id} text={todo.text} setTodos={setTodos} checked={todo.checked}/>
        })}
    </ul>
}
export default Todos;