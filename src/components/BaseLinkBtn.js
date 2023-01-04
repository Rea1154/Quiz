import { Link } from "react-router-dom";

const BaseLinkBtn = ({ btnText, page }) => {
  return (
    <Link className="btn-base shadow-baseShadow h-[44px] " to={page}>
      {btnText}
    </Link>
  );
};

export default BaseLinkBtn;
