import {useState} from 'react'
import {v4} from 'uuid'
import TabItem from '../TabItem'
import './index.css'

const tagsList = [
  {
    id: 1,
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    id: 2,
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    id: 3,
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    id: 4,
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    id: 5,
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    id: 6,
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

function MyTasks() {
  const [activeOptionId, setActiveOptionId] = useState(tagsList[0].optionId)
  const [input, setInput] = useState('')
  const [taskList, setTaskList] = useState([])

  function onChangeInput(event) {
    setInput(event.target.value)
  }
  function onChangeSelectedInput(event) {
    setActiveOptionId(event.target.value)
  }

  const onChangeActiveOptionId = option => {
    setActiveOptionId(option)
  }

  function onAddTask(event) {
    event.preventDefault()
    console.log(input, activeOptionId)
    const newTask = {
      id: v4(),
      taskName: input,
      taskCategory: activeOptionId,
    }
    setTaskList(prevList => [...prevList, newTask])
    setInput('')
    setActiveOptionId('')
  }

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={onAddTask}>
        <h1 className="heading">Create a task!</h1>
        <label htmlFor="input-label" className="tag">
          Task
        </label>
        <input
          id="input-label"
          type="text"
          value={input}
          placeholder="Enter the task here"
          className="text-box"
          onChange={onChangeInput}
        />
        <label htmlFor="select-label" className="tag">
          Tags
        </label>
        <select
          id="select-label"
          className="select-box"
          value={activeOptionId}
          onChange={onChangeSelectedInput}
        >
          {tagsList.map(each => (
            <option
              key={each.optionId}
              value={each.optionId}
              className="select-option"
            >
              {each.displayText}
            </option>
          ))}
        </select>
        <button className="form-btn" type="submit">
          Add Task
        </button>
      </form>
      <div className="tasks-view">
        <h1 className="head">Tags</h1>
        <ul className="task-list">
          {tagsList.map(each => (
            <TabItem
              key={each.id}
              task={each}
              isActive={each.optionId === activeOptionId}
              onChangeActiveOptionId={onChangeActiveOptionId}
            />
          ))}
        </ul>
        <div className="task-container">
          <h1 className="head">Tasks</h1>
          {taskList.length === 0 ? (
            <p className="name">No Tasks Added Yet</p>
          ) : (
            <ul className="order-list">
              {taskList.map(each => (
                <li key={each.id} className="task-item">
                  <p className="name">{each.taskName}</p>
                  <button className="btn" type="button">
                    {each.taskCategory.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyTasks
