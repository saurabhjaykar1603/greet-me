import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Home.css";
import DiwaliLamp from "./images/diwali-lamp.png";
import Lamp from "./images/lamp.png";

const GREETINGS = [
  "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
  "सर्व मित्र परिवाराला …दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!!दीपावलीच्या हार्दिक शुभेछा…",
  "सगळा आनंद सगळे सौख्य,सगळ्या स्वप्नांची पूर्णता,यशाची सगळी शिखरे,सगळे ऐश्वर्य,हे आपल्याला मिळू दे,ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
  "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशाघेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
  "यशाची रोषणाई कीर्तीचे अभ्यंग स्नान मनाचे लक्ष्मिपुजनसमृद्धीचे फराळप्रेमाची भाऊबीजअशा मंगल दिवाळीच्या शुभेच्छा",
];

function Home() {
  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(
    searchParams.get("s") >= GREETINGS.length ? 0 : searchParams.get("s") || 0
  );
  const [orange, setOrange] = useState(searchParams.get("o"));

  return (
    <>
      <div className="container mt-5" style={{ marginTop: "100px" }}>
        <div
          className={`card custom-card shadow w-md-25 d-block mx-auto ${
            orange === "orange"
              ? "theme-orange"
              : orange === "red"
              ? "theme-red"
              : orange === "green"
              ? "theme-green"
              : orange === "purple"
              ? "theme-purple"
              : "theme-orange"
          }`}
          style={{ width: "" }}
        >
          <div className=" mt-5 position-relative ">
            <img
              src={DiwaliLamp}
              alt="diwali-lamp "
              className="position-absolute left-lamp"
            />
            <img src={Lamp} alt="lamp" className="position-absolute lamp" />
            <img
              src={DiwaliLamp}
              alt="diwali-lamp"
              className="position-absolute right-lamp"
            />
          </div>
          <div className="card-body p-5  position-relative">
            <div className="to fs-6  fw-bold">
              <p className=""> 💐 Dear {to}❣️</p>
            </div>

            <div className="mt-4 fs-5  text-center fw-normal">
              <p>{GREETINGS[greetingNumber]}</p>
            </div>

            <div className="from fs-6 ">
              <p className=" fw-bold">🙏 शुभेच्छुक {from}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center  fw-bold fs-4"
        style={{ marginTop: "180px" }}
      >
        <p className="generate-tagline">
          Do You Want To Create Your Own Diwali Greeting ? Customize it here 👇🏻{" "}
        </p>
      </div>
      <div
        className="container w-75  shadow-lg rounded-2 pt-4 pb-2 text-center fw-bold fs-6   bg-light"
        style={{ border: "1px solid grey" }}
      >
        <p
          className="url"
          onClick={() => {
            const url = `${
              import.meta.env.VITE_BASE_URL
            }?to=${to}&from=${from}&s=${greetingNumber}&o=${orange}`;
            navigator.clipboard.writeText(url);
            alert(`url copied successfully ${url}`);
          }}
        >
          {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&s={greetingNumber}
          &o={orange}
        </p>
      </div>
      <div className="container card card-body shadow w-75 mt-4 mb-5 mt-sm-4 mb-sm-4 mt-md-5 mb-md-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              className="form-control"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
              placeholder="To"
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              className="form-control"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              placeholder="From"
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
            <select
              className="form-select"
              aria-label="Default select example"
              value={greetingNumber}
              onChange={(e) => {
                setGreetingNumber(e.target.value);
              }}
            >
              <option value="0">Greeting One</option>
              <option value="1">Greeting Two</option>
              <option value="2">Greeting Three</option>
              <option value="3">Greeting Four</option>
              <option value="4">Greeting Five</option>
            </select>
          </div>
          <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center  ">
            <div
              className={`orange-square  shadow-lg border-info-subtle  ${
                orange === "orange"
                  ? "theme-orange"
                  : orange === "red"
                  ? "theme-red"
                  : orange === "green"
                  ? "theme-green"
                  : orange === "blue"
                  ? "theme-blue"
                  : orange === "purple"
                  ? "theme-purple"
                  : "theme-orange"
              }`}
              onClick={() => {
                setOrange((prevColor) => {
                  switch (prevColor) {
                    case "orange":
                      return "red";
                    case "red":
                      return "green";
                    case "green":
                      return "blue";
                    case "blue":
                      return "purple";
                    case "purple":
                      return "orange";
                    default:
                      return "orange";
                  }
                });
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
