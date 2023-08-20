export default function BoardCreator(numRows) {
	const Rows = [];
	const Columns = [];
	const List = [];
	const asciiA = 65;
	for (let index = 0; index < numRows; index++) {
		Rows.push(`${numRows - index}`);
		Columns.push(`${String.fromCharCode(asciiA + index).toLowerCase()}`);
	}
	Rows.forEach((row) => {
		Columns.forEach((column) => {
			List.push(`${row + "-" + column}`);
		});
	});
	return { Rows, Columns, List };
}