import React from 'react';
import PropTypes from 'prop-types';

import Curriculars from './Curriculars/Curriculars';

const Extracurriculars = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Extracurriculars</h3>
    </div>
    {data.map((job) => (
      <Curriculars
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Extracurriculars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Extracurriculars.defaultProps = {
  data: [],
};


export default Extracurriculars;
