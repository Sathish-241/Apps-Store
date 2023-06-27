import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active-btn' : 'btn'

  const activeTabId = () => {
    onActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={activeTabClassName}
        type="button"
        onClick={activeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
