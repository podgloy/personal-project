const NavButtons = ({ onNext }) => {
  return (
    <div>
      <button
        onClick={onNext}
        className="nav-shadow hover:bg-[#E7D69A] filter drop-shadow-lg  p-5 flex justify-center items-center bg-[#FFE792] border-2 border-white rounded-full w-14 h-8"
      >
        <img src="/blackarrow.svg" />
      </button>
    </div>
  );
};

export default NavButtons;
