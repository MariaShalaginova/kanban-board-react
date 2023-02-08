import uniqid from 'uniqid'
import { LIST_TYPES, LIST_COPY } from '../../config'
import List from '../list/List'
import css from "./Board.module.css"

const Board = (props) => {
    const {tasks, setTasks} = props

    const addNewTask = (title, description, type) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description || "The task has no description",
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                const backlogTasks = tasks.filter(task => task.status === 'backlog')
                return (
                    <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask} blTasks={backlogTasks} setTasks={setTasks} allTasks={tasks} />
                )
            })}
        </div>

    )
}

export default Board