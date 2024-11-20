import { connect } from "react-redux"
import { deleteTask, prepareToEdit } from "../redux/actions"



const BtnBlock = (props) => {
    return (
        <div className="btn-block-wrapper">
            <button
                onClick={() => props.deleteTask(props.todo)}
                className="btn delete-task-btn"
                type="button">
                DELETE TASK
            </button>
            <button
                onClick={() => props.prepareToEdit(props.todo)}
                className="btn edit-task-btn"
                type="button">
                EDIT TASK
            </button>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (todo)=>dispatch(deleteTask(todo)),
        prepareToEdit: (todo)=>dispatch(prepareToEdit(todo))
    }
    
}


export default connect(null,mapDispatchToProps)(BtnBlock)