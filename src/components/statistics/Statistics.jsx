import propTypes from "prop-types";
import css from './Stratistics.module.css';

function randomColor() {
  let colorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  return colorCode;
}


export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{label}.docx</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}

              
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired
    })
  ).isRequired,
}

