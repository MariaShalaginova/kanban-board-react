import {LIST_TYPES, LIST_COPY} from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const {tasks} = props
    
	return (
        <footer className={css.footer}>
            <div className={css.tasksFooter}>
                {Object.values(LIST_TYPES).map(type => {
                    const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
                    return (
                        // если есть задачи в бэклоге и финишед , то выводим количество задач, используя условный рендеринг
                        <div key={LIST_COPY[type]}>
                            {type === LIST_TYPES.BACKLOG && (
                
                                <p>Active tasks: {listTasks.length}</p>
                            )}
                            {type === LIST_TYPES.FINISHED && (
                                 <p>Finished tasks: {listTasks.length}</p>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className={css.copy}>
            <p>Kanban board by </p><a href='https://github.com/MariaShalaginova' target='_blank' rel='noreferrer'>MariaShalaginova</a>
                <p>{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
    
export default Footer