const CancelBtn = ({color}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 sm:w-3 sm:h-3"
    >
      <path
        d="M2 14L14 2.02078"
        stroke={`${color}`}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M2 2L14 13.9792"
        stroke={`${color}`}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CancelBtn;
