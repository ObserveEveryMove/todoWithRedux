import React from "react"
import { connect } from "react-redux"
import { handleEdit } from "../redux/actions"
import Form from "./Form"
import ListItem from "./ListItem"

const List = (props) => {
    return (
        <div className="list-wrapper">
            {props.app.todos.length > 0 ?
                props.app.todos.map(todo => {
                    return (
                        <ul>
                            {
                                props.app.isEdit && props.app.editId === todo.id ?
                                    <li>
                                        <Form
                                            className="list-form"
                                            labelTxt="Task to change: "
                                            name="editTask"
                                            handleStuff={props.handleEdit}
                                            value={props.editTask}
                                            btnTxt="CHANGE"
                                        />
                                    </li>

                                    :
                                    <ListItem
                                        todo={todo}
                                    />
                            }
                        </ul>
                    )
                }) :
                <h3>There is nothing to do here!</h3>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit: ()=>dispatch(handleEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)