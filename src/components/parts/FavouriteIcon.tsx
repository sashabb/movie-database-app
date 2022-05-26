export const FavouriteIcon = ({ fill }: { fill: boolean }) => {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill={fill ? "var(--color)" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12549 2.03726C3.62245 0.650828 6.04527 0.654758 7.53701 2.04603L8.49663 2.94102L9.47241 2.03727C10.9694 0.650834 13.3922 0.654751 14.8839 2.04602C16.3757 3.43728 16.3715 5.68906 14.8745 7.07549L8.47777 13L2.11605 7.06673C0.624304 5.67546 0.628532 3.42368 2.12549 2.03726Z"
        stroke="var(--color)"
        strokeLinecap="round"
      />
    </svg>
  );
};
