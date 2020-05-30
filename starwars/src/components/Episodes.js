import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Episodes = props => {
  return <h3>Featured Episodes: {props.episodeArr.length} </h3>
};

export default Episodes;