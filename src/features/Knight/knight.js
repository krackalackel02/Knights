function BoardCreator(numRows) {
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
export function convert(input) {
	let output;
	if (typeof input === "string") {
		output = [parseInt(input[0]) - 1];
		output.push(input[2].toUpperCase().charCodeAt(0) - 65);
	} else if (Array.isArray(input)) {
		output = String(input[0] + 1);
		output += "-";
		output += String.fromCharCode(65 + input[1]).toLowerCase();
	}
	return output;
}

function arraysEqual(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

function arrayIncludes(bigArray, smallArray) {
	return bigArray.some((item) => arraysEqual(item, smallArray));
}
function defaultBoard() {
	return BoardCreator(8).List.map((item) => {
		return convert(item);
	});
}
export function nextMove(
	start = [0, 0],
	availMoves = defaultBoard(),
	currentPath = [0, 0]
) {
	const deltaMoves = [
		[1, 2],
		[-1, 2],
		[1, -2],
		[-1, -2],
		[2, 1],
		[-2, 1],
		[2, -1],
		[-2, -1],
	];
	let availPos = deltaMoves
		.map((delta) => {
			return [start[0] + delta[0], start[1] + delta[1]];
		})
		.filter((position) => {
			return (
				arrayIncludes(availMoves, position) &&
				!arrayIncludes(currentPath, position)
			);
		});

	return availPos;
}
export function knightMoves(
	start = [3, 4],
	finish = [7, 7],
	board = defaultBoard()
) {
	let queue = [{ pos: start, path: [start] }];

	while (queue.length > 0) {
		let node = queue.shift();
		let currentPosition = node.pos;
		let currentPath = node.path;

		if (arraysEqual(currentPosition, finish)) {
			return currentPath.map((pos) => {
				return convert(pos);
			}); // Return the path when we find the finish position
		}

		let nextMoves = nextMove(currentPosition, board, currentPath);

		for (let move of nextMoves) {
			let newPath = [...currentPath, move];
			queue.push({ pos: move, path: newPath });
		}
	}
	return null; // No path found
}
