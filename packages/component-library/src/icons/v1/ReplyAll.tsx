import * as React from 'react';
import type { SVGProps } from 'react';
export const SvgReplyAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M18 17v-2.99A4 4 0 0 0 14 10h-3v5L5 9l6-6v5h3a6 6 0 0 1 6 6v3h-2zM6 6V3L0 9l6 6v-3L3 9l3-3z"
      fill="currentColor"
    />
  </svg>
);
