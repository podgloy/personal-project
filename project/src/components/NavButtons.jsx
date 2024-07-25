const NavButtons = ({ onNext }) => {
  return (
    <div className="flex justify-between p-5">
      <img src="dots.svg" />
      <button
        onClick={onNext}
        className="p-5 flex justify-center items-center border-2 border-white rounded-full w-11 h-11"
      >
        <img src="/arrow8.svg" />
      </button>
    </div>
  );
};

export default NavButtons;
