import React, { Component, PropTypes } from 'react';
import Meter from '../meter';
import styles from '../../styles/entry-input';

const BareInput = ({input, name, placeholder, meta}) => {
  const isPassword = /password/.test(name);
  return (
    <input
      {...input}
      id={name}
      type={isPassword && !meta.active ? 'password' : 'text'}
      placeholder={placeholder}
      className={styles.input}
      />
    );
};

BareInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};

class Input extends Component {
  render() {
    const { type, input } = this.props;
    return (
      <div className={styles.wrapper}>
        <BareInput {...this.props}/>
        {type === 'password' && <Meter input={input.value}/>}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object
};

export default Input;
