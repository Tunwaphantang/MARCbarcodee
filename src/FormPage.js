import JsBarcode from "jsbarcode";
import { useState } from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import Logo from "./logo.png";
import { v4 as uuidv4 } from "uuid";

const FormPage = () => {
  const [{ label, number, input1, input2, description }, setItem] = useState({
    label: "",
    number: 0,
    input1: "",
    input2: "",
    description: "",
  });

const login = (event) => {
    event.preventDefault();
    let uuid = uuidv4();
    let data = { uuid, label, number, input1, input2, description };
    let url = "https://z4paoeuwnk.execute-api.ap-southeast-1.amazonaws.com/dev/products";
    var response =  fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => console.log(res.json()))
  };

  const genBarcode = (event) => {
    event.preventDefault();
    var name = document.getElementById("objectid").value;
    JsBarcode(".mybarcode", name);
  };

  return (
    <div>
      <>
        <br />
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <Jumbotron>
                <img classname="logo" src={Logo} alt="MARC" width={100} />
                <h2>ITEM FORM/STOCK LOAD</h2>
                <p>
                  After putting item's information to this form it will generate
                  Barcode that can be use to retrieve the information.
                </p>
                <Form onSubmit={login}>
                  <Form.Group>
                    <h2>Stock Item</h2>
                    <Form.Label>Label</Form.Label>
                    <Form.Row>
                      <Col sm="8">
                        <Form.Control
                          placeholder="label"
                          value={label}
                          onChange={(event) =>
                            setItem({
                              label: event.target.value,
                              number,
                              input1,
                              input2,
                              description,
                            })
                          }
                        ></Form.Control>
                      </Col>
                      <Col>
                        <Form.Control
                          placeholder="No."
                          value={number}
                          onChange={(event) =>
                            setItem({
                              label,
                              number: event.target.value,
                              input1,
                              input2,
                              description,
                            })
                          }
                        ></Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Input1</Form.Label>
                      <Form.Control
                        placeholder="Enter.."
                        value={input1}
                        onChange={(event) =>
                          setItem({
                            label,
                            number,
                            input1: event.target.value,
                            input2,
                            description,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                      <Form.Label>Input2</Form.Label>
                      <Form.Control
                        placeholder="Enter.."
                        value={input2}
                        onChange={(event) =>
                          setItem({
                            label,
                            number,
                            input1,
                            input2: event.target.value,
                            description,
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(event) =>
                          setItem({
                            label,
                            number,
                            input1,
                            input2,
                            description: event.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </>
      {/* <svg class="mybarcode"></svg> */}
    </div>
  );
};

export default FormPage;
