import React from 'react';
import Col6 from '../shared-components/Col6';
import '../../assets/css/section.css';

function Section(props) {
  const { heading, p, img, imgFirst } = props;

  return (
    <>
      <div
        style={{ maxWidth: '1500px' }}
        className="px-4 px-sm-auto px-xl-5 mb-lg-5 mx-auto overflow-hidden"
      >
        <div className="row align-items-center px-md-5 px-xl-0">
          <Col6
            className={
              imgFirst ? 'text-center text-lg-left left-photo' : ' d-none'
            }
          >
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              width="80%"
              src={img}
              alt="left-side"
            />
          </Col6>
          <Col6>
            <div className="my-5">
              <h1 className="lato-bold">{heading}</h1>
              <p className="h5 text-justify my-4 text-secondary">{p}</p>
            </div>
          </Col6>
          <Col6
            className={
              imgFirst ? 'd-none' : 'text-center text-lg-right right-photo'
            }
          >
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              className="w-100"
              src={img}
              alt="right-side"
            />
          </Col6>
        </div>
      </div>
    </>
  );
}
export default Section;
