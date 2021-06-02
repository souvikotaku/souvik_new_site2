import "./App.css";
import { useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      country: country,
    };

    console.log(formdata);
  };

  return (
    <div style={{ backgroundColor: "black", height: "100%" }}>
      <div>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/banner1withlogo.jpg"}
        />
      </div>
      {/* <div>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/midbanner1new.jpeg"}
        />
      </div> */}
      <div className="container ">
        <div className="row ">
          <div
            className="col-6"
            style={{
              backgroundColor: "black",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ color: "#4b3868" }}>
              <i>SKOLEOM</i>
            </h2>
            <h5 style={{ color: "#4b3868" }}>
              <i>
                <b>BUY EVERYTHING YOU TOUCH ON YOUR SCREEN</b>
              </i>
            </h5>
            <p style={{ color: "grey" }}>
              <b>
                Skoleom allows users to interact within their video. This
                eCommerce
                <br />
                platform 3.0* converges data from international websites to its
                new
                <br />
                generation interactive player. It gives its users the best
                possible
                <br />
                experience.
              </b>
            </p>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "black",
              textAlign: "right",
              marginTop: "3rem",
            }}
          >
            <h1 style={{ color: "#08bfcf" }}>July 24, 2021</h1>

            <button
              className="btn btn-lg"
              style={{ backgroundColor: "#08bfcf", width: "14rem" }}
            >
              <h3 style={{ color: "white" }}>on Skoleom</h3>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div
            className="col"
            style={{ backgroundColor: "black", textAlign: "center" }}
          >
            <img
              style={{ width: "70%", height: "95%" }}
              src={process.env.PUBLIC_URL + "/images/newkanye1.jpg"}
            />
            <button
              className="btn btn-md"
              style={{
                color: "white",
                backgroundColor: "#fdb916",
                borderRadius: "45px",
                marginTop: "-7rem",
              }}
            >
              Watch on Skoleom
            </button>
          </div>
          <div
            className="col-5"
            style={{ backgroundColor: "black", marginTop: "2rem" }}
          >
            <form>
              <div className="form-row" style={{ padding: "0px 40px" }}>
                <div
                  className="form-group col-md-12"
                  style={{ textAlign: "center" }}
                >
                  <h1 style={{ color: "white", marginBottom: "1rem" }}>
                    Registration
                  </h1>
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputEmail4">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    required
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputPassword4">Password</label> */}
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Last name"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputPassword4">Password</label> */}
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  {/* <label htmlFor="inputEmail4">Email</label> */}
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Country"
                    style={{
                      backgroundColor: "#1d1b1c",
                      borderColor: "#1d1b1c",
                      height: "3rem",
                    }}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#f6bc34",
                    color: "white",
                    width: "14rem",
                  }}
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col" style={{ backgroundColor: "black" }}>
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: "white" }}>Best sellers</h3>
            </div>
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                backgroundColor: "#1d1a23",
              }}
            >
              <div className="row no-gutters" style={{ width: "200%" }}>
                <div
                  className="col-auto"
                  style={{
                    width: "20%",
                    height: "100%",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <a
                    href="https://www.amazon.in/Be-savage-Black-Sweat-Shirts-Girls/dp/B08Y6QB3NB/ref=sr_1_8?crid=37CNY53GUH2PM&dchild=1&keywords=pink+sweatshirt+for+women&qid=1622643793&sprefix=pink+sweat%2Caps%2C307&sr=8-8"
                    target="_blank"
                  >
                    <img
                      style={{ height: "77%", borderRadius: "10px" }}
                      src={process.env.PUBLIC_URL + "/images/girl1.png"}
                      className="img-fluid"
                      alt
                    />
                  </a>
                </div>
                <div className="col">
                  <div className="card-block px-2">
                    <p
                      className="card-text"
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginTop: "2rem",
                      }}
                    >
                      Deisquared logo sweatshirt
                      <br />
                      Farfetch <br />
                      $765.00
                    </p>

                    <p
                      className="card-text"
                      style={{
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      in: <span style={{ color: "#3e5b31" }}>Amazon</span>
                    </p>
                    <button
                      className="btn btn-md"
                      style={{
                        color: "white",
                        backgroundColor: "#fdb916",
                        borderRadius: "45px",
                        width: "8rem",
                        marginTop: "2rem",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Refund/Return Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Confidentiality</a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-4 col-md  col-6 col">
              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Contact Us</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Support</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Cookie Preferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
