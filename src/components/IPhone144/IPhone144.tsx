import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse6Icon } from './Ellipse6Icon';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse12Icon } from './Ellipse12Icon';
import classes from './IPhone144.module.css';
import { Rectangle1Icon } from './Rectangle1Icon';
import { Rectangle12Icon } from './Rectangle12Icon';
import { Rectangle15Icon } from './Rectangle15Icon';
import { Rectangle20Icon } from './Rectangle20Icon';

interface Props {
  className?: string;
}
/* @figmaId 6:90 */
export const IPhone144: FC<Props> = memo(function IPhone144(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}>
        <Rectangle1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle11}></div>
      <div className={classes.menu1}></div>
      <div className={classes.liliaGharbi}>Lilia Gharbi</div>
      <div className={classes.rectangle12}>
        <Rectangle12Icon className={classes.icon2} />
      </div>
      <div className={classes.students}>Students</div>
      <div className={classes.ratings}>Ratings</div>
      <div className={classes.user3}></div>
      <div className={classes.star1}></div>
      <div className={classes._4}>4</div>
      <div className={classes._32}>3.2</div>
      <div className={classes.todaySMeetings}>Today’s Meetings</div>
      <div className={classes.unnamed}>. .</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle15}>
        <Rectangle15Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle20}>
        <Rectangle20Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle16}></div>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon8} />
      </div>
      <div className={classes.mootezAloui}>Mootez Aloui</div>
      <div className={classes.zainebAbdelkafi}>Zaineb Abdelkafi</div>
      <div className={classes.marwenHassin}>Marwen Hassin</div>
      <div className={classes.hanaChaari}>Hana Chaari</div>
      <div className={classes._1010Am}>10:10 am</div>
      <div className={classes._1245Pm}>12:45 pm</div>
      <div className={classes._30Pm}>03:00 pm</div>
      <div className={classes._610Pm}>06:10 pm</div>
      <div className={classes.boxB1B10}>Box: B1B10</div>
      <div className={classes.boxB1B102}>Box: B1B10</div>
      <div className={classes.boxB1B103}>Box: B1B10</div>
      <div className={classes.boxB1B104}>Box: B1B10</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.profile}>Profile</div>
      <div className={classes.students2}>Students</div>
      <div className={classes.meetings}>Meetings</div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon9} />
      </div>
      <div className={classes.profile2}></div>
    </div>
  );
});
