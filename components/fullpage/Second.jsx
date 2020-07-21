import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Content from "../content/content";
import Section from "../section/section";
import Page from "../page/page";




const Second = withNavigationContext( () => {
    return (
        <Page>
            <Section wrapper={false} backgroundColor="#292c35">
                <Content
                    main={
                        <Lettering
                            title="My Story"
                            text={[
                                "I am an Ex-Aerospace Engineer",
                                "who in fell in love with Coding"
                            ]}
                        />
                    }
                />
            </Section>
        </Page>
    )})

export default Second