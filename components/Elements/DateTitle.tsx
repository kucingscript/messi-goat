import { RowProps } from "@/types/props";
import moment from "moment";

const DateTitle = ({ date }: RowProps) => {
  const day = moment(date).format("dddd");
  const _date = moment(date).format("Do MMM YYYY");
  const isToday = moment(date).isSame(moment(), "day");

  return (
    <div>
      {isToday ? (
        <span className="font-bold text-2xl">Hari ini</span>
      ) : (
        <span className="font-bold">{day}</span>
      )}
      <span>, {_date}</span>
    </div>
  );
};

export default DateTitle;
