import { memo, SVGProps } from 'react';

const Rectangle20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.7} d='M0 0H300V80H0V0Z' fill='#FFC93C' />
  </svg>
);

const Memo = memo(Rectangle20Icon);
export { Memo as Rectangle20Icon };
