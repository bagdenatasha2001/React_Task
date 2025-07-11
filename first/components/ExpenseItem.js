import './ExpenseItem.css'


function ExpenseItem(props){

    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year =props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
    <>
    <div className='Expense-item'>
      <div>
            <div> {month} </div>
             <div> {year}</div>
             <div> {day}</div>

        </div>
    

        <div className='Expense-item-description'>  

            <h2> {props.title}</h2>

            <div className='Expense-item-price'> ${props.amount}</div>

        </div>

    </div>
       
       
    </>
    )
}


export default ExpenseItem;