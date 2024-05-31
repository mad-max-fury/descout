
export default function Avatar() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_62_1811)">
        <rect x="6" y="2" width="32" height="32" rx="16" fill="#EAE7FD" />
        <rect
          x="6.5"
          y="2.5"
          width="31"
          height="31"
          rx="15.5"
          stroke="#DED9FC"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.6667 11.3333H18.6667C17.5622 11.3333 16.6667 12.2288 16.6667 13.3333V22.6667C16.6667 23.7712 17.5622 24.6667 18.6667 24.6667H25.3334C26.438 24.6667 27.3334 23.7712 27.3334 22.6667V16.6667H25.3334C23.8607 16.6667 22.6667 15.4728 22.6667 14V11.3333ZM18.6667 18C18.6667 17.6318 18.9652 17.3333 19.3334 17.3333H24.6667C25.0349 17.3333 25.3334 17.6318 25.3334 18C25.3334 18.3682 25.0349 18.6667 24.6667 18.6667H19.3334C18.9652 18.6667 18.6667 18.3682 18.6667 18ZM19.3334 20.6667C18.9652 20.6667 18.6667 20.9652 18.6667 21.3333C18.6667 21.7015 18.9652 22 19.3334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333C25.3334 20.9652 25.0349 20.6667 24.6667 20.6667H19.3334Z"
        fill="#654EF2"
      />
      <path
        d="M27.1977 15.3333C27.1199 15.1329 27.0096 14.9448 26.8699 14.7771L24.5998 12.053C24.4314 11.8509 24.2271 11.6866 24.0001 11.5663V14C24.0001 14.7364 24.597 15.3333 25.3334 15.3333H27.1977Z"
        fill="#654EF2"
      />
      <defs>
        <filter
          id="filter0_dd_62_1811"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_62_1811"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_62_1811"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_62_1811"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_62_1811"
            result="effect2_dropShadow_62_1811"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_62_1811"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
