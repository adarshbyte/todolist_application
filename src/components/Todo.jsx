const Todo = (props)=>{
    const { text,setTodos,id,checked } = props;
    const handleCheck = (e)=>{
        setTodos(prev=>{
            return prev.map(todo=>{
                if(todo.id===e.target.id){
                    return {...todo,checked:e.target.checked}
                }
                return todo;
            })
        })
    }
    return <li>
        <input type="checkbox" id={id} checked={checked} onChange={handleCheck}/>
        <p>{text}</p>
    </li>
}
export default Todo;