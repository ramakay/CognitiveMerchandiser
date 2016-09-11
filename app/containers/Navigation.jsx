import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {

    return (
      <div>
  <a href="https://github.com/ramakay/CognitiveMerchandiser/"> <img className={cx('githubRibbon')} src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" /></a>

      <nav className={cx('navigation')} role="navigation">
        <Link to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>The Cognitive Merchandiser <span className={cx('beta')}>Beta</span></Link>
                                       <Link className={cx('item')} to="/">Start</Link>
                                                           <Link className={cx('item')} to="/Persona">01.Persona</Link>
                    <Link className={cx('item')} to="/Search"><sub>02.</sub>Search</Link>

                                       <a  className={cx('item')} href="/Products">03.Products </a>
      </nav>
</div>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
