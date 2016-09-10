import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <div className={cx('description')}>
    <div className={cx('shade')}>        
      <video muted autoPlay  poster="http://res.cloudinary.com/drjw5ga79/video/upload/v1473470889/My_Movie_torstp.jpg">
  <source src="http://res.cloudinary.com/drjw5ga79/video/upload/v1473470889/My_Movie_torstp.mp4" type="video/mp4"/>
</video>
</div>
            <h2> Can Cognition help with your next sale? </h2>


      </div>
          <div className={cx('bodyText')}>
                 <div className={cx('card-grey')}>
       <h2> The Abandoned carts </h2>
       <p> </p>
       </div>
                <div className={cx('card-white')}>

       <h2> The Abandoned carts </h2>
       <p> </p>
       </div>
                <div className={cx('card-grey')}>

       <h2> The Abandoned carts </h2>
       <p> </p>
       </div>
    </div>
    <footer>
      &copy; 2016 Cognitive Merchandiser
    </footer>
  </div>
  );
};

export default About;
