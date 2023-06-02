
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 ">
        <Container fluid>
          <div className="header-body ">
            <Row>
              <Col lg="3" >
                <Card className="card-stats mb-4 mb-xl-3 bg-success text-white">
                  <CardBody>
                    <Row>
                      <div className="col ">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase  mb-0 text-white "
                        >
                          Traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto ">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm ">
                      <span className="text-success mr-2 text-white">
                        <i className="fa fa-arrow-up " /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap text-white">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3"  >
                <Card className="card-stats mb-4 mb-xl-0 bg-warning text-white">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase  mb-0 bg-warning text-white "
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white ">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className=" mr-2 text-white">
                        <i className="fas fa-arrow-down text-white" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap text-white">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3"  >
                <Card className="card-stats mb-4 mb-xl-0 bg-danger text-white  ">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase  mb-0 text-white"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-white mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap text-white">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3"  >
                <Card className="card-stats mb-4 mb-xl-0 bg-secondary text-white">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase  mb-0 text-white"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-white text-sm">
                      <span className="text-success mr-2 text-white">
                        <i className="fas fa-arrow-up " /> 12%
                      </span>{" "}
                      <span className="text-nowrap text-white">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <Row className="P-0 mb-4">
          <Col xl={12}>
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Latest Transaction</h4>
                <div className="table-responsive">
                  <table className="table table-hover table-centered table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th scope="col">(#) Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col" >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">#14256</th>
                        <td>
                          <div>
                            {/* <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              /> */}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>$94</td>
                        <td>
                          <span className="badge p-2 fw-bolder  w-50 bg-success">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14257</th>
                        <td>
                          <div>
                            {/* <img
                                src={user3}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "} */}
                            Brent Shipley
                          </div>
                        </td>
                        <td>16/1/2019</td>
                        <td>$112</td>
                        <td>
                          <span className="badge p-2 w-50  bg-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14258</th>
                        <td>
                          <div>
                            {/* <img
                                src={user4}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              /> */}
                            Robert Sitton
                          </div>
                        </td>
                        <td>17/1/2019</td>
                        <td>$116</td>
                        <td>
                          <span className="badge p-2 w-50  bg-success">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14259</th>
                        <td>
                          <div>
                            {/* <img
                                src={user5}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "} */}
                            Alberto Jackson
                          </div>
                        </td>
                        <td>18/1/2019</td>
                        <td>$109</td>
                        <td>
                          <span className="badge p-2 w-50  bg-danger">
                            Cancel
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14260</th>
                        <td>
                          <div>
                            {/* <img
                                src={user6}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "} */}
                            David Sanchez
                          </div>
                        </td>
                        <td>19/1/2019</td>
                        <td>$120</td>
                        <td>
                          <span className="badge p-2 w-50  bg-success">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14261</th>
                        <td>
                          <div>
                            {/* <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "} */}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>$94</td>
                        <td>
                          <span className="badge p-2 w-50 bg-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div>
                            <Link to="#" className="btn btn-primary btn-sm">
                              Edit
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>

    </>
  );
};

export default Header;
