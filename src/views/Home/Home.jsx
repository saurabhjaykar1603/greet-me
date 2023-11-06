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
  "एक दिवा लावु जिजाऊचरणी।  एक दिवा लावु शिवचरणी।  एक दिवा लावु शंभुचरणी। आमचा इतिहास हीच आमची प्रतिष्ठा….. दिपावलीच्या हार्दिक शिवशुभेच्छा…. आपल्या घरि सुख समाधान सदैव नांदो हिच जगदंबेचरणी प्रार्थना॥ ।। जय शिवराय ।। तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
];

function Home() {
  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(
    searchParams.get("s") >= GREETINGS.length ? 0 : searchParams.get("s") || 0
  );
  const [theme, setTheme] = useState(searchParams.get("t"));

  return (
    <>
      <div className="container mt-5">
        <div
          className={`card custom-card shadow w-md-25 d-block mx-auto ${`theme-${theme}`}`}
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
            <div className="to fs-6 ">
              <p className=""> 💐 Dear {to}</p>
            </div>

            <div className="mt-4 fs-5  text-center">
              <p>{GREETINGS[greetingNumber]}</p>
            </div>

            <div className="from fs-6 ">
              <p className="">🙏 शुभेच्छुक {from}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center  fw-bold fs-4"
        style={{ marginTop: "180px" }}
      >
        <p>
          Do You Want To Create Your Own Diwali Greeting ? Customize it here 👇🏻{" "}
        </p>
      </div>
      <div className="container w-75  shadow-lg rounded-2 pt-4 pb-2 text-center fw-bold fs-6   bg-secondary ">
        <p style={{cursor: 'pointer'}}
          onClick={() => {
            const url = `${
              import.meta.env.VITE_BASE_URL
            }?to=${to}&from=${from}&s=${greetingNumber}&t=${theme}`;
            {
              navigator.clipboard.writeText(url);
              alert(`url coppied successfully ${url}`)
            }
          }}
        >
          {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&s={greetingNumber}
          &t={theme}
        </p>
      </div>
      <div className="container card card-body shadow w-75 mt-4 mb-5 ">
        <div className="row">
          <div className="col-md-3">
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
          <div className="col-md-3 ">
            {" "}
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
          <div className="col-md-3">
            <select
              class="form-select"
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
          <div className="col-md-3">
            <select
              class="form-select"
              aria-label="Default select example"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              <option value="orange">orange theme</option>
              <option value="red">red theme</option>
              <option value="blue">blue theme</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
