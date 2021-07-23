import React from "react";
import data from "../../api/why-sala.json";
import { Row, Col } from "antd";

const WhySALA = () => {
  return (
    <React.Fragment>
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
                          className="why-join-salakoompi"
                        />
                      </div>
                    </Col>
                    <Col span={16}>
                      <div className="sala-purpose-container">
                        <h2>{res.titile}</h2>
                        <p className="sala-purpose-subtitle">{res.subtitle}</p>
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
                        <p className="sala-purpose-subtitle">{res.subtitle}</p>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div>
                        <img
                          src={res.images}
                          alt=" why join with sala"
                          className="why-join-salakoompi"
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
    </React.Fragment>
  );
};

export default WhySALA;
