function char(props) {
	const inlineStyle = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black'
	}

	return (
		<div style={inlineStyle} onClick={props.click}>
			{props.chars}
			</div>
		);
}
export default char;