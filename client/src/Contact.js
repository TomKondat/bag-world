import { Container, Card } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

function Contact() {
  return (
    <Card className="Background1" border="light">
      <Container style={{ maxWidth: "1000px", padding: "20px 30px" }}>
        <Card.Header className="headers">
          <h1>Contact Us:</h1>
        </Card.Header>
        <br></br>
        <Card.Body>
          <div
            style={{
              width: "auto",
              maxWidth: "1000px",
              padding: "20px 30px",
            }}
          >
            <h2 className="Contact1">
              {" "}
              <center>
                Email adress: Bagworld@gmail.com <AiOutlineMail />
              </center>
            </h2>

            <br></br>
            <h2 className="Contact2">
              <center>
                Phone number: 077-654876354 <FiPhoneCall />
              </center>
            </h2>
            <br></br>
            <h2 className="Contact3">
              {" "}
              <center>
                Instagram profile: @Bag_Worldd <GrInstagram />{" "}
              </center>
            </h2>
            <br></br>
            <br></br>
            <center>
              <img
                style={{ width: "14rem", height: "14rem" }}
                src="https://img.freepik.com/premium-vector/shop-bag-logo-design-world-consumer-right-day-background_409025-504.jpg?w=2000"
              ></img>
            </center>
          </div>
        </Card.Body>
      </Container>
    </Card>
  );
}
export default Contact;
