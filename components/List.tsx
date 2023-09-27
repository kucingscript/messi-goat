import { getMatches } from "@/utils";
import groupBy from "lodash/groupBy";
import moment from "moment";
import { Row } from ".";

const List = async () => {
  const matches: Match[] = await getMatches();
  const getMatchDate = (item: Match) =>
    moment(item.datetime).format("YYYY-MM-DD");
  const matchesByDate = groupBy(matches, getMatchDate);

  return (
    <div>
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>
          <Row matches={matchesByDate[date]} date={date} />
        </div>
      ))}
    </div>
  );
};

export default List;
