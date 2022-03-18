import React from "react";
import "../css/darkcss.css";
import * as themeActions from "../reduxdark/Actiondark/Darktype";
import { useSelector, useDispatch } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// import { ToggleTheme } from "../reduxdark/Actiondark/Darkaction";
const Darkmode = () => {
  const dispatch = useDispatch();
  // const themeReducer = useSelector((state)=>state.theme);
  const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
  // console.log(themeReducer.Darkreducer.theme)
  let { theme } = themeReducer;
  // console.log(themeReducer)
  // console.log(themeReducer.theme)
  // console.log(dispatch,"kk")

  const switchDarkMode = () => {
    // themeReducer.Darkreducer.theme
    theme
      ? dispatch(themeActions.Darkcreatot(false))
      : dispatch(themeActions.Darkcreatot(true));
  };

  return (
    <>
      <div
        id="darkmode"
        // inline styling with darkmode:  comment out to use this for example //
        /* style={{ background: isdarkMode ? "white" : "yellow" }} */
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          // checked={theme} onChange={(val)=>dispatch(themeActions.ToggleTheme(val))}
          // checked={themeReducer.Darkreducer.theme} onChange={switchDarkMode}
          checked={theme}
          onChange={switchDarkMode}
        />

        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>

      <input
        type="checkbox"
        data-toggle="switchbutton"
        data-style="ios"
        data-onstyle="dark"
        data-offstyle="light"
       
      />

      {/* <p style={themeReducer.Darkreducer.theme ? {backgroundColor:"black" }  : {backgroundColor:"blue" }}>Number</p> */}
      {/* <p style={theme ? {backgroundColor:"black",color:"white" }  : {backgroundColor:"pink" }}>Number</p> */}
    </>
  );
};

export default Darkmode;
