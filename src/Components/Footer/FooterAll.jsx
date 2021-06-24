import React, { useState } from "react";
import Footer from "../Footer/footer";
import ComapnyList from "../Footer/comapnylist";
import CustomerService from "../Footer/CustomerService";
import ProfileList from "../Footer/ProfileList";
import FooterLast from "./FooterLast";
import "./footer.css";
import OnlineCard from "./OnlineCard";

function FooterAll() {
  const [count, setcount] = useState([ 2, 3,4, 5]);

  return (
    <div>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {count.map((count) => {
            if (count == 1) {
              return (
                <div className="column">
                  <Footer
                    key={count}
                    heading="ABOUT"
                    text={
                      <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio Nam
                        nec tellus a odio tincidunt auctor a ornare odio
                        tincidunt auctor a ornare odio
                      </p>
                    }
                  />

                </div>
              );
            } else if (count == 2) {
              return (
                <Footer key={count} heading="COMPANY" text={<ComapnyList />} />
              );
            } else if (count == 3) {
              return (
                <Footer key={count} heading="PROFILE" text={<ProfileList />} />
              );
            } else if (count == 4) {
              return (
                <Footer
                  key={count}
                  heading="CUSTOMER SERVICE"
                  text={<CustomerService />}
                />
              );
            } else if (count == 5) {
              return <OnlineCard key={count} />;
            }
          })}
        </div>
      </div>
	  <hr/>
      <FooterLast />
    </div>
  );
}

export default FooterAll;
