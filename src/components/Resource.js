import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import Ability from "./Ability";
import Item from "./Item";
import Skill from "./Skill";
import Monster from "./Monster";
import RollTable from "./RollTable";

const mapStateToProps = ({ resources }, { id }) => {
  const resource = resources[id];

  if (!resource) return {};

  switch (resource.type) {
    case "character":
      return { Component: Character };
    case "ability":
      return { Component: Ability };
    case "item":
      return { Component: Item };
    case "skill":
      return { Component: Skill };
    case "monster":
      return { Component: Monster };
    case "rolltable":
      return { Component: RollTable };

    default:
      throw new Error(`No component for this type ${resource.type}`);
  }
};

export default connect(mapStateToProps)(({ Component, ...props }) =>
  Component ? <Component {...props} /> : null
);
