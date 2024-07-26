import Image from "next/image";

const SiteLogo = ({ className }) => {
  // click to refresh page
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Image
      onClick={handleClick}
      src="/stol-logo.svg"
      alt="Logo Image"
      width="40"
      height="40"
      className={className}
    />
  );
};

export default SiteLogo;
