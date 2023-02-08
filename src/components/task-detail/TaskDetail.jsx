import { useParams, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'
import closeIcon from '../../assets/close-icon.svg'

const TaskDetail = props => {
    const {tasks, setTasks} = props;
    let { taskId } = useParams();
    const task = tasks.find(task => task.id === taskId)

    // функция перезаписи дескрипшен в таску
    const updateDescription = ( e ) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, description: e.target.value}
            }
            return task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className={css.wrapper}>
            {task ? (
            <>
                <div className={css.header}>
                    <h2 className={css.title}>{task.title}</h2>
                    <Link to='/'>
                        <img src={closeIcon} alt="close"/>
                    </Link>
                </div>

                <span>
                    <textarea value={task.description} name='description' onChange={updateDescription}></textarea>
                </span>
            </>
    ) : (
        // если в поисковой строке набрать неверный айди задачи, то появится сообщение, что такой задачи нет
        <div>
            <h2>Task with ID {taskId} not found</h2>
            <Link to='/' className={css.homeLink}>&#8592; Back</Link>
        </div>
    )}
        </div>
    )
}

export default TaskDetail