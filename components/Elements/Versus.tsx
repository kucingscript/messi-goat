import moment from "moment";
interface VersusProps {
  date?: string;
}

const Versus = ({ date }: VersusProps) => {
  const isFinished = moment(date).isBefore(Date());

  return (
    <div className="grid relative h-full py-3">
      <span className="absolute font-bold text-2xl place-self-center">VS</span>
      <span className="font-medium text-sm place-self-end bg-black rounded-full px-3 py-1 text-white">
        {isFinished ? "Selesai" : moment(date).format("HH:mm")}
      </span>
    </div>
  );
};

export default Versus;
