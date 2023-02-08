import {useState} from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
    const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({
		title: ''
	})

	// добавление новой задачи в бэклог
	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title)
		}
        setFormVisible(false)
	}

	return (
		<form onSubmit={handleSubmit} className={css.form}>
			<input className={css.input} id='taskTitle' name='title' type='text' placeholder='New task title' onChange={handleChange} value={values.title} />
			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask