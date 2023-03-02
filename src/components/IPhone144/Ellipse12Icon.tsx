import { memo, SVGProps } from 'react';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={60} cy={60} r={60} fill='white' stroke='#FFC93C' strokeWidth={4} />
  </svg>
);

const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };
