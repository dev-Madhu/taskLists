import './index.css'

const TabItem = props => {
  const {task, isActive, onChangeActiveOptionId} = props
  const {displayText, optionId} = task
  const bgColor = isActive ? 'active-task' : 'task-btn'

  const onClickItem = () => {
    onChangeActiveOptionId(optionId)
  }

  return (
    <li className="item">
      <button className={`${bgColor}`} type="button" onClick={onClickItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
