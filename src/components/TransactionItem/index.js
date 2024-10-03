import './index.css'

const TransactionItem = props => {
  const {transactionTypeOptions} = props

  return (
    <form className="form">
      <h1 className="heading">Add Transaction</h1>
      <label htmlFor="title" className="label">
        TITLE
      </label>
      <input type="text" id="title" placeholder="TITLE" className="input" />

      <label htmlFor="amount" className="label">
        AMOUNT
      </label>
      <input type="text" id="amount" placeholder="AMOUNT" className="input" />
      <label htmlFor="type" className="label">
        TYPE
      </label>
      <select id="type" className="input">
        {transactionTypeOptions.map(eachOption => (
          <option key={eachOption.optionId} value={eachOption.displayText}>
            {eachOption.displayText}
          </option>
        ))}
      </select>
      <button type="submit" className="button">
        Add
      </button>
    </form>
  )
}

export default TransactionItem
