import * as React from "react"
const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={30}
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M1 1h28v28.031H1Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="M26.914 25.926h.008ZM5.754 2.324c-.266 0-.52.121-.793.364-.031.027-.426.402-.68.648l-.226.21C2.75 4.774 2.16 6.98 2.55 9.173c.125.707.324 1.441.597 2.176 1.383 3.726 4 6.96 5.954 9.023 1.945 2.07 5.023 4.871 8.648 6.457.719.313 1.438.555 2.133.719 2.156.508 4.383.031 5.668-1.211l.215-.203c.25-.238.64-.61.695-.664.8-.828.402-1.516-1.207-3.16l-.402-.414c-1.02-1.063-2.727-2.84-4.172-2.668-.395.046-.805.335-1.239.64-.43.301-.875.613-1.41.785-1.433.457-2.886.157-4.097-.843a22.906 22.906 0 0 1-2.125-2.024 22.287 22.287 0 0 1-1.887-2.23c-.93-1.266-1.149-2.742-.617-4.157.195-.527.53-.957.855-1.375.324-.418.633-.812.7-1.207.25-1.441-1.426-3.25-2.426-4.328l-.391-.426C6.98 2.896 6.336 2.325 5.753 2.325Zm15.871 26.707a8.815 8.815 0 0 1-2.035-.234 13.41 13.41 0 0 1-2.348-.793c-3.824-1.668-7.043-4.59-9.066-6.75-2.035-2.145-4.77-5.527-6.223-9.457a14.06 14.06 0 0 1-.664-2.399C.922 7.32 1.223 4.45 3.184 2.61l.214-.207c.274-.257.7-.664.715-.68 1.961-1.726 3.715.2 4.871 1.473l.383.418c1.164 1.254 3.11 3.352 2.754 5.422-.125.711-.566 1.277-.953 1.781-.277.356-.54.692-.668 1.036-.379 1.007-.223 2.023.453 2.937.52.711 1.137 1.441 1.785 2.11a20.94 20.94 0 0 0 2.012 1.917c.871.723 1.875.934 2.895.61.351-.113.695-.356 1.066-.613.52-.364 1.105-.778 1.816-.86 2.086-.25 4.063 1.817 5.246 3.05l.395.407c1.203 1.23 3.023 3.09 1.203 4.965l-.726.691-.207.196c-1.348 1.3-3.153 1.77-4.813 1.77"
      />
    </g>
  </svg>
)
export default SVG