import clsx from "clsx";
import Image from "next/image";

interface TeamProps {
  team?: Team;
  isToday?: boolean;
}

const Team = ({ team, isToday }: TeamProps) => {
  return (
    <div className="flex flex-col w-1/2 items-center justify-center">
      <Image
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`}
        alt={team?.name || ""}
        width={90}
        height={60}
        className={clsx(
          "object-contain border-[3px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]",
          isToday &&
            "w-[180px] h-[120px] border-[4px] shadow-[10px_10px_0_0_#000000]"
        )}
      />
      <p className="font-bold text-base mt-2 text-center">{team?.name}</p>
      <p className="font-bold text-2xl text-center">{team?.goals}</p>
    </div>
  );
};

export default Team;
