import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-icon" alt={appName} />
      <p className="app-title">{appName}</p>
    </li>
  )
}
export default AppItem
