import React, {useState} from "../snowpack/pkg/react";
import TimezoneSelect, {
  i18nTimezones,
  LabelType
} from "../snowpack/link/react-timezone-select/src/index.js";
const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("Europe/Rome");
  const [labelStyle, setLabelStyle] = useState("original");
  const handleLabelChange = (event) => {
    setLabelStyle(event.target.value);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("h2", null, "react-timezone-select"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://ndo.dev",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "author"
  }, "ndom91"))), /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      width: "min(100%, 400px)",
      justifyContent: "space-around",
      marginTop: "50px"
    },
    onChange: handleLabelChange
  }, /* @__PURE__ */ React.createElement("span", null, "Label Style:"), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "original"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "original",
    name: "labelStyle",
    value: LabelType.ORIGINAL,
    defaultChecked: labelStyle === "original"
  }), "original"), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "altName"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "altName",
    name: "labelStyle",
    value: LabelType.ALTNAME
  }), "altName"), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "abbrev"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "abbrev",
    name: "labelStyle",
    value: LabelType.ABBREV
  }), "abbrev")), /* @__PURE__ */ React.createElement("div", {
    className: "select-wrapper"
  }, /* @__PURE__ */ React.createElement(TimezoneSelect, {
    value: selectedTimezone,
    onChange: setSelectedTimezone,
    labelStyle,
    onBlur: () => console.log("Blur!"),
    timezones: {
      ...i18nTimezones,
      "America/Lima": "Pittsburgh",
      "Europe/Berlin": "Frankfurt"
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "code"
  }, /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(selectedTimezone, null, 2))));
};
export default Timezone;
