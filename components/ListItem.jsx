import BtnBlock from "./BtnBlock"


const ListItem = (props) => {
    return (
        <li className="list-item">
            <h3>{props.todo.task}</h3>
            <BtnBlock
                todo={props.todo}
            />
        </li>
    )
}

export default ListItem