import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetails = [
  {id: uuidv4(), title: 'salary', amount: 50000, type: 'income'},
  {id: uuidv4(), title: 'salary', amount: 50000, type: 'income'},
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="heading">Hi Richard</h1>
          <p className="top-para">
            Welcome back to <span className="span">money manager</span>
          </p>
        </div>
        <div className="amount-flex">
          <div className="items-flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="img"
            />
            <div>
              <p className="balance">Your Balance</p>
              <p className="amount">RS 0</p>
            </div>
          </div>
          <div className="items-flex1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="img"
            />
            <div>
              <p className="balance">Your Income</p>
              <p className="amount">RS 0</p>
            </div>
          </div>
          <div className="items-flex2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="img"
            />
            <div>
              <p className="balance">Your Expenses</p>
              <p className="amount">RS 0</p>
            </div>
          </div>
        </div>
        <div className="bottom-flex">
          <div>
            <TransactionItem transactionTypeOptions={transactionTypeOptions} />
          </div>
          <div className="history">
            <h1 className="heading">History</h1>
            <div className="all-flex">
              <p className="para">Name</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            <ul>
              {moneyDetails.map(eachHistory => (
                <MoneyDetails key={eachHistory.id} value={eachHistory} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
