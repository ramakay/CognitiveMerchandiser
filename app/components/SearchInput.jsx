import React, { Component, PropTypes } from 'react';
const ENTER_KEY_CODE = 13;

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
   this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onSave() {
     console.log(event.target.value)
    const { onEntrySearch } = this.props;
    let value= value ? value: this.refs.myInput.value

    onEntrySearch(value);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntrySearch } = this.props;
    onEntrySearch(event.target.value);
  }

  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {

      this.onSave();
    }
  }

  render() {
    const { className, placeholder, value } = this.props;
    const btnSave='btnSave'
    return (
      <div>
      <div><input ref="myInput" className={className}
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={value}
        autoFocus />
        </div>
        <div>
     <input type="button" className={btnSave}  value="Search" onClick={this.onSave} />
      </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onEntrySearch: PropTypes.func,
  onEntryChange: PropTypes.func
};