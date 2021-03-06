import React, { PropTypes } from 'react';
import TopicTextInput from 'components/TopicTextInput';
import classNames from 'classnames/bind';
import styles from 'css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const EntryBox = ({onEntryChange, onEntryClick,onEntrySave, topic}) => {
  return (
    <div className={cx('entrybox')}>
      <TopicTextInput
        className={cx('input')}
        value={topic}
        placeholder="Enter the Brand Brief"
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave}
        onEntryClick={onEntryClick}
         />
        
    </div>
  );
};

EntryBox.propTypes = {
  topic: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired,
  onEntryClick:PropTypes.func.isRequired
};

export default EntryBox;
