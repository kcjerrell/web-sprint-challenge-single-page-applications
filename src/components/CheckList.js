const CheckList = props => {
	const { name, items, value, onChange } = props;

	return (
		items.map((item, i) => {
			const propName = `${name}${item.replace(/\s/g, '')}`;

			return (
				<label key={i}>
					<input
						type='checkbox'
						name={propName}
						checked={value[propName]}
						onChange={onChange}
					/>
					{item}
				</label>
			);
		})
	);
}

export default CheckList;