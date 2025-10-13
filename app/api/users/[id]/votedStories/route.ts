// type votedStoriesType = {
//   [key: string]: string[];
// };

type votedStoriesType = Record<string, string[]>;

const votedStories: votedStoriesType = {
  111: ["1", "3", "5"],
  222: ["2", "4", "6"],
  333: ["8", "10", "12"],
  444: ["7", "11", "13"],
  555: ["9", "15", "14"],
};
