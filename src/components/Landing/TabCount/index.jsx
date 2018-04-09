import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

const TabCount = ({ tabCount }) => {

  const classes = new BEMHelper({
    name: 'tabCount',
    prefix: 'c-',
  });

  const tabCountInt = parseInt(tabCount);

  let details = "Looks like my browser may have just restarted"

  if(tabCountInt >= 30) {
    details = "Looks like things are a bit busy."
  } else if(tabCount >= 1) {
    details = "It's not too bad at the moment."
  } else {
    return (
      <div { ...classes() }>

      <p { ...classes('details') }>
        // loading... //
      </p>
    </div>
    );
  }

  return (
    <div { ...classes() }>
      <h1 { ...classes('count') }>
        <div { ...classes('spinner') }>{ tabCount }</div>
        <div { ...classes('bar') }></div>
      </h1>
      <p { ...classes('details') }>
        This is the count of how many Chrome tabs I have open on my computer. { details }
      </p>
    </div>
  );
}

TabCount.propTypes = {
  tabCount: React.PropTypes.string
}

TabCount.defaultProps = {
  tabCount: "1"
}

export default TabCount;
