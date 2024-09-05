import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "./assets/bunny.png";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App" style={{ marginInline: "6%" }}>
                <header
                    className="App-header"
                    style={{
                        backgroundColor: "pink",
                        border: " 5px solid orange",
                    }}
                >
                    <h1>HI this is TA selin here....</h1>
                    <h3>ohhhh yeah .......</h3>

                    <img
                        src={logo}
                        alt="A flipped strawberry"
                        style={{
                            width: "20%",
                            height: "40%",
                            left: "70%",
                            position: "absolute",
                        }}
                    />
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </header>
                <hr></hr>

                <p>
                    {" "}
                    ok that was a bit slow, lets try that again with this line
                </p>
            </div>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "orange" }}>
                        <hr></hr>
                        First column.
                    </Col>
                    <Col style={{ backgroundColor: "lightgreen" }}>
                        <hr></hr>
                        <ul>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ul>
                    </Col>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: 10,
                            height: 10,
                        }}
                    ></div>
                </Row>
            </Container>
        </>
    );
}

export default App;
