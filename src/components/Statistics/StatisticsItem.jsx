import css from './Statistics.module.css';
import { getRandomHexColor } from './Stats';
export const StatisticsItem = ({key, label, percentage})=>{return(
	<li className={css.item} key ={key} style={{
        backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)}