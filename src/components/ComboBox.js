const ComboBox = props => {
	const { name, value, onChange, items } = props;
	return (
		<select name={name} onChange={onChange} value={value}>
			<option value=''> - Select a {name} - </option>
			{items.map((op, i) => {
				return <option key={i} value={op}>{op}</option>
			})}
		</select>
	);
};

export default ComboBox;