import React, {Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
import styles from 'css/components/persona';


// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
export default class ActionButton extends Component  {
	 constructor(props) {
    super(props);
    this.onTargetAction = this.onTargetAction.bind(this);
  }

  onTargetAction() {
    const { targetAction } = this.props;
    targetAction()
  }
  render() {
  return (
    <button value="Go to Grid" className={cx('actionButton')} onClick={this.onTargetAction}> Go to Grid </button>
  );
}
};

ActionButton.propTypes = {
   briefCollapsed:PropTypes.bool,
   targetAction:PropTypes.func
};

