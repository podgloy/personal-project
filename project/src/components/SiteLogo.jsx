import Image from "next/image";

const SiteLogo = ({ className }) => {
  // click to refresh page
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Image
      onClick={handleClick}
      src="/stol-logo.png"
      alt="Logo Image"
      width="120"
      height="60"
      className={className}
    />
  );
};

export default SiteLogo;
