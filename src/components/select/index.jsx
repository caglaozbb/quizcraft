import styles from './styles.module.css'

export default function Select({ options, value, ...props }) {
  return (
    <select
      className={styles.select}
      value={value}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.key}>
          {option.label}
        </option>
      ))}
    </select>
  )
}