// import s from './Filter/Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
