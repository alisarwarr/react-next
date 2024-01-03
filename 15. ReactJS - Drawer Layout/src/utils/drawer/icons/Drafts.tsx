const Icon = (color: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M8.0785 3.52173H3.02149C1.90999 3.52173 1 4.43172 1 5.54322V12.9272C1 13.8697 1.676 14.2727 2.5015 13.8112L5.05599 12.3877C5.32899 12.2382 5.771 12.2382 6.0375 12.3877L8.592 13.8112C9.4175 14.2727 10.0935 13.8697 10.0935 12.9272V5.54322C10.1 4.43172 9.19 3.52173 8.0785 3.52173Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.1 5.54322V12.9272C10.1 13.8697 9.424 14.2662 8.5985 13.8112L6.04401 12.3877C5.77101 12.2382 5.32899 12.2382 5.05599 12.3877L2.5015 13.8112C1.676 14.2662 1 13.8697 1 12.9272V5.54322C1 4.43172 1.90999 3.52173 3.02149 3.52173H8.0785C9.19 3.52173 10.1 4.43172 10.1 5.54322Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 3.02149V10.4055C14 11.348 13.324 11.7445 12.4985 11.2895L10.1 9.9505V5.54349C10.1 4.43199 9.19002 3.522 8.07852 3.522H4.90002V3.02149C4.90002 1.90999 5.81002 1 6.92152 1H11.9785C13.09 1 14 1.90999 14 3.02149Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default Icon;
