const Icon = (color: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
  >
    <path
      d="M1 4.25H14"
      stroke={color}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.59998 9.44995H4.89998"
      stroke={color}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.52499 9.44995H9.12499"
      stroke={color}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.886 1H11.1075C13.4215 1 14 1.572 14 3.8535V9.19001C14 11.4715 13.4215 12.0435 11.114 12.0435H3.886C1.5785 12.05 1 11.478 1 9.19651V3.8535C1 1.572 1.5785 1 3.886 1Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default Icon;
