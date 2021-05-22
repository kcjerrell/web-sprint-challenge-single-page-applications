const ComboBox = props => {
	const { name, value, onChange, items, id } = props;
	return (
		<select name={name} onChange={onChange} value={value} id={id}>
			<option value=''> - Select a {name} - </option>
			{items.map((op, i) => {
				return <option key={i} value={op}>{op}</option>
			})}
		</select>
	);
};

export default ComboBox;