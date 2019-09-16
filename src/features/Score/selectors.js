export const getScore = store => store.score.score.map(score => ({ ...score }));
