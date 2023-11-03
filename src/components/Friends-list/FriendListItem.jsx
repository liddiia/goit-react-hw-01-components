import css from './Friends.module.css'


export const FriendItem = ({ isOnline, avatar, name,id})=>{
const Status = isOnline ? <span>&#128994;</span>: <span>&#128308;</span>
    return(
<li className={css.item} >
  <span className={css.status}>{Status}</span>
  <img className={css.avatar}  src={avatar} 
  alt={name} width="48"/>
  <p className={css.name}>{name}</p>
  
    </li>

    )}
