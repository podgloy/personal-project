import Image from "next/image";

const SiteLogo = ({ className }) => {
  return (
    <Image
      src="/stol-logo.png"
      alt="Logo Image"
      width="120"
      height="60"
      className={className}
    />
  );
};

export default SiteLogo;
