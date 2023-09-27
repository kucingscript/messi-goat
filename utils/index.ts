export const getMatches = async () => {
  const res = await fetch("https://worldcupjson.net/matches");
  return res.json();
};
