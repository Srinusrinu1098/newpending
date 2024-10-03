import './index.css'

const MoneyDetails = props => {
  const {value} = props
  const {title, amount, type} = value

  return (
    <li className="all-flex1">
      <p className="para1">{title}</p>
      <p className="para1">{amount}</p>
      <p className="para1">{type}</p>
    </li>
  )
}
export default MoneyDetails
