import { memo, SVGProps } from 'react';

const Rectangle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.7} d='M0 0H300V80H0V0Z' fill='#86E5FF' />
  </svg>
);

const Memo = memo(Rectangle15Icon);
export { Memo as Rectangle15Icon };
