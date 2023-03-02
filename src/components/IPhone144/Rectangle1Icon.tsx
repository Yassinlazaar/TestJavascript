import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 390 844' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H390V844H0V0Z' fill='white' />
  </svg>
);

const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
