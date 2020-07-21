import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

const Home = withNavigationContext(({ fullpage }) => {
  return (
    <>
      <Section wrapper={false} backgroundColor="#292c35">
        <Background src="https://res.cloudinary.com/dbcjs8bca/image/upload/v1593472086/large_image_85a4339b93.png" />
        <Content
          main={
            <>
              <Lettering
                title="Hi,"
                text={[
                "I'm Protik Sarkar"
                ]}
              />
            </>
          }
          action={
            <div className="button">
            </div>
          }
        />

      </Section>
    </>
  );
});

  export default Home