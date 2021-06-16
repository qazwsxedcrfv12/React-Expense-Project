import './ExpenseItem.css'

function ExpenseDate(props){
    return (
        <div className="moment">
                <div>{props.date.toLocaleString('en-US',{month: 'long'})}</div>
                <div>{props.date.toLocaleString('en-US',{day: '2-digit'})}</div>
                <div>{props.date.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate