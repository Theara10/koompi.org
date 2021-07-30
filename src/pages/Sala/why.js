import React from "react";
import data from "../../api/why-sala.json";
import { Row, Col } from "antd";

const WhySALA = () => {
  return (
    <React.Fragment>
      <div className="why-desktop">
        {data.map((res, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment>
                <div className="sala-gray-back">
                  <div className="container">
                    <Row>
                      <Col span={8}>
                        <div>
                          <img
                            src={res.images}
                            alt=" why join with sala"
                            className="img-responsive why-join-salakoompi2"
                          />
                        </div>
                      </Col>
                      <Col span={16}>
                        <div className="sala-purpose-container">
                          <h2>{res.titile}</h2>
                          <p className="sala-purpose-subtitle">
                            {res.subtitle}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <div className="sala-white-back">
                  <div className="container">
                    <Row>
                      <Col span={16}>
                        <div className="sala-purpose-container">
                          <h2>{res.titile}</h2>
                          <p className="sala-purpose-subtitle">
                            {res.subtitle}
                          </p>
                        </div>
                      </Col>
                      <Col span={8}>
                        <div>
                          <img
                            src={res.images}
                            alt=" why join with sala"
                            className="img-responsive why-join-salakoompi2"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>

      <div className="why-mobile">
        {data.map((res, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment>
                <div className="sala-gray-back">
                  <div className="container">
                    <Row gutter={12}>
                      <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                        <div className="sala-purpose-container">
                          <h2>{res.titile}</h2>
                          <p className="sala-purpose-subtitle">
                            {res.subtitle}
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                        <div>
                          <img
                            src={res.images}
                            alt=" why join with sala"
                            className="img-responsive why-join-salakoompi2"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <div className="sala-white-back">
                  <div className="container">
                    <Row gutter={12}>
                      <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                        <div className="sala-purpose-container">
                          <h2>{res.titile}</h2>
                          <p className="sala-purpose-subtitle">
                            {res.subtitle}
                          </p>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                        <div>
                          <img
                            src={res.images}
                            alt=" why join with sala"
                            className="img-responsive why-join-salakoompi2"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default WhySALA;
