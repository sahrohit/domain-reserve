import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./Socials.css";
import { Button } from "@material-ui/core";

const Socials = () => {
  return (
    <React.Fragment>
      <Button
        onClick={(event) =>
          (window.location.href = "https://github.com/sahrohit")
        }
      >
        <GitHubIcon className="icon1" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href =
            "https://www.facebook.com/imadeyoureadthis26/")
        }
      >
        <FacebookIcon className="icon2" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href =
            "https://www.linkedin.com/in/rohit-sah-96a10a1b8/")
        }
      >
        <LinkedInIcon className="icon2" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href = "https://twitter.com/sah_rohite")
        }
      >
        <TwitterIcon className="icon2" />
      </Button>
    </React.Fragment>
  );
};

export default Socials;
