import { useState } from 'react'
import { Link } from 'react-router-dom'
import css from './List.module.css'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from "../forms/FormAddNewTask"
import DropdownForm from '../forms/Dropdown'

const List = props => {
    const {title, type, tasks, addNewTask, blTasks, setTasks, allTasks} = props
    const [isFormVisible, setFormVisible] = useState(false)

    
    // функция видимости формы добавления новой таски
    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }



    return (
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {tasks.map(task => {
                return (
                    <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                        <div className={css.task}>{task.title}</div>
                    </Link>
                )
            })}
            {/* прорисовывание компоненты добавления новой задачи в списке бэклог */}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
            )}

            {type === LIST_TYPES.BACKLOG &&
                  (<button className={css.addButton} onClick={handleClick} style={{ display: !isFormVisible ? "block" : "none" }}>+Add card</button>)
            }
            {type === LIST_TYPES.READY &&
                  (<button className={css.addButton} onClick={handleClick} disabled= {blTasks.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }}>+Add card</button>)
            }
             {type === LIST_TYPES.IN_PROGRESS &&
                  (<button className={css.addButton} onClick={handleClick} disabled= {blTasks.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }}>+Add card</button>)
            }
            {type === LIST_TYPES.FINISHED &&
                  (<button className={css.addButton} onClick={handleClick} disabled= {blTasks.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }}>+Add card</button>)
            }
{/* 
           <button className={css.addButton} onClick={handleClick} style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button> */}
      {/* прорисовывание выпадаюищх списков тасок в других списках типов задач, кроме бэклога */}
           {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <DropdownForm addNewTask={addNewTask} setFormVisible={setFormVisible} tasks={allTasks} type={type} setTasks={setTasks} />
                )
            }
        </div>
    )
}

export default List