import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <div>
            <h1>
              <span>PROTIK</span>
              <span>SARKAR</span>
            </h1>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            me
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            my-story
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            my-contact
          </Link>
          <Link
            className={slug === "page-four" ? "selected" : null}
            href="/page-four"
          >
            my-projects
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
