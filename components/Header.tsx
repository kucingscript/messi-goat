import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full mt-[60px]">
      <Image
        src={"/header.png"}
        alt="Messi GOAT"
        width={1780}
        height={662}
        className="object-contain"
      />
    </div>
  );
};

export default Header;
