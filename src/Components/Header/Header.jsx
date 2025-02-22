import React from "react";
import "../../Components/Header/Header.css"
import Netflixlogo from "../../assets/images/Netflixlogo.jpg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
function Header() {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header-left">
            <ul>
              <li className="Netlogo">
                <img src={Netflixlogo} alt="netflixlogo" width="100%" />
              </li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownCircleIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
