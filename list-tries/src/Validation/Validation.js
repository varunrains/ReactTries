function validation(props) {
    const msg = props.leng <= 5 ? "Text too short" : "Text long enough";
    const inlineStyle = {
        color: 'red'
    };
    return (
        <div>
            <p style={inlineStyle}> {msg} </p>
            </div>
        );
}

export default validation;