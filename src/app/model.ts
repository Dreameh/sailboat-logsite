export interface Position {
	current_pos: string;
	destination_pos: string;
	heading: string;
}

export interface SailboatList {
	name: string;
	initial_test: string;
	modules: string;
	position: Position;
	finished: string;
}
