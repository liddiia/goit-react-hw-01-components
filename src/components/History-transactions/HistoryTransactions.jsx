import css from './HistoryTransaction.module.css'
import {TransactionItem} from './TransactionItem'
export const TrasactionHistory = ({transaction}) => { 
        return (
   <table className={css.table}>
    <thead className={css.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
   <tbody>
   {transaction.map(({id,type, amount, currency}) =>{
   return(
    <TransactionItem
   key={id}
   type={type}
   amount ={amount}
   currency={currency}
    />
   )})}
 </tbody>
    </table>
)}

