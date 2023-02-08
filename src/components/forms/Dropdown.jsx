import css from './Forms.module.css'
import { LIST_TYPES } from '../../config'
import data from "../../moch.json"
import uniqid from 'uniqid'

const DropdownForm = props => {
    const { tasks, type, setTasks, setFormVisible } = props  

    const addNewTask = (title, description, type) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: type
        }
        setTasks([...tasks, newTask])
    }

    // фильтруем таски по type
    const backlogTasks = tasks.filter(obj => {
        return obj.status === "backlog"
    })
   
    const readyTasks = tasks.filter(obj => {
        return obj.status === "ready"
    })

    const inProgressTasks = tasks.filter(obj => {
        return obj.status === "inProgress"
    })

    // функция перезаписи type
    const handleChange = (e) => {
		const taskName = e.target.value;
		const updatedTasks = tasks.map(task => {
			if (task.title === taskName) {
				return {...task, status: type}
			}
			return task;
		})

		setTasks(updatedTasks);
	}

    const onClick = (e) => {
        e.preventDefault()
        addNewTask(e.target.title, e.target.description, 'ready')
        setFormVisible(false)
    }

    return (
        <select className={css.select} defaultValue={'DEFAULT'} onChange={handleChange} >
              <option selected="selected" value="DEFAULT">Choose the task</option>
	
                {type === LIST_TYPES.READY ? backlogTasks.map(task =>
                 <option key={task.id} title={task.title} onClick={(e)=> onClick(e)} description={tasks.description}>{task.title}</option>): ""
                }
                {type === LIST_TYPES.IN_PROGRESS ? readyTasks.map(task =>
                 <option key={task.id} title={task.title} onClick={(e)=> onClick(e)} description={tasks.description}>{task.title}</option>): ""
                }
                {type === LIST_TYPES.FINISHED ? inProgressTasks.map(task =>
                 <option key={task.id} title={task.title} onClick={(e)=> onClick(e)} description={tasks.description}>{task.title}</option>): ""
                }

		</select>
    )  
}
export default DropdownForm