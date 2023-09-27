import moment from "moment";

import { RowProps } from "@/types/props";
import { Card, DateTitle } from ".";
import clsx from "clsx";

const Row = ({ matches, date }: RowProps) => {
  const isToday = moment(date).isSame(moment(), "day");
  return (
    <div className="mt-[40px]">
      <DateTitle date={date} />
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[10px]",
          isToday && "lg:grid-cols-2 grid-cols-1"
        )}
      >
        {matches?.map((match, index) => (
          <Card key={index} match={match} isToday={isToday} />
        ))}
      </div>
    </div>
  );
};

export default Row;
