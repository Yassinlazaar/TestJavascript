import { memo, SVGProps } from 'react';

const Rectangle12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 128 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H21.2903V20H0V0Z' fill='#A5D1DF' />
    <path d='M106.21 1H127.5V21H106.21V1Z' fill='#A5D1DF' />
  </svg>
);

const Memo = memo(Rectangle12Icon);
export { Memo as Rectangle12Icon };
