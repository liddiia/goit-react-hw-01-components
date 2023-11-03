import css from './Statistics.module.css';
import { getRandomHexColor } from './Stats';
export const StatisticsItem = ({label, percentage})=>{return(
	<li className={css.item} style={{
        backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)}