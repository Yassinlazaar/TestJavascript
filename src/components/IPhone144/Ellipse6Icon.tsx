import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M45 23C45 35.4264 34.9264 45.5 22.5 45.5C10.0736 45.5 1.14441e-05 35.4264 1.14441e-05 23C1.14441e-05 10.5736 10.0736 0.5 22.5 0.5C34.9264 0.5 45 10.5736 45 23Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
