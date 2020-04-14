// export interface Position {
//     current_pos: string;
//     destination_pos: string;
//     heading: string;
// }

// export interface SailboatList {
//     name: string;
//     initial_test: string;
//     modules: string;
//     position: Position;
//     finished: string;
// }

export interface SailboatList {
  at_lat: number;
  at_lon: number;
  dest_lat: number;
  dest_lon: number;
  message: string;
  time: string;
}
