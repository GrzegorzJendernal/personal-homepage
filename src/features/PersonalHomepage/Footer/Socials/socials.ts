import { ReactComponent as gh } from "../../images/github.svg";
import { ReactComponent as fb } from "../../images/facebook.svg";
import { ReactComponent as lin } from "../../images/linkedIn.svg";
import { styledIcon } from "./styled";

export const socialsLinks = [
  {
    name: "GitHub",
    link: "https://github.com/GrzegorzJendernal",
    Icon: styledIcon(gh),
  },
  {
    name: "LinkedIN",
    link: "https://linkedin.com/in/GrzegorzJendernal",
    Icon: styledIcon(lin),
  },
  {
    name: "Facebook",
    link: "https://facebook.com/people/Grzegorz-Jendernal/100009370311242/",
    Icon: styledIcon(fb),
  },
];
