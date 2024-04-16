import classes from '../styles/TextInput.module.css';

export default function TextInput({ icon, iconName, ...rest }) {
	return (
		<>
			<div className={classes.textInput}>
				<input {...rest} />
				<span className={icon}>{iconName}</span>
			</div>
		</>
	);
}
