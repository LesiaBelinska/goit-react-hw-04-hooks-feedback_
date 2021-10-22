import PropTypes from "prop-types";
//import Section from "../Section/Section";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => (
    <>
        {total > 0 ? (
            <ul className={s.list}>
                <li className={s.item}>Good:{good}</li>
                <li className={s.item}>Neutral:{neutral}</li>
                <li className={s.item}>Bad:{bad}</li>
                <li className={s.item}> Total:{total} </li>
                <li className={s.item}>Positive feedback:{positiveFeedbackPercentage}%</li>
            </ul>
        ) : (
            <p className={s.notification}>no feedback...</p>
        )}
    </>
);

export default Statistics;

Statistics.propTypes = {
 good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,   
}