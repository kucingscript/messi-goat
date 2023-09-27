import clsx from "clsx";
import { Team, Versus } from "..";

interface CardProps {
  match?: Match;
  isToday?: boolean;
}

const Card = ({ match, isToday }: CardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-row aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow",
        isToday &&
          "shadow-[15px_15px_0_0_#000000] hover:shadow-[20px_20px_0_0_#000000]"
      )}
    >
      <Team team={match?.home_team} isToday={isToday} />
      <Versus date={match?.datetime} />
      <Team team={match?.away_team} isToday={isToday} />
    </div>
  );
};

export default Card;
