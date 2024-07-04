import React from 'react';

import NoResults from "../assets/images/no-results.png";

import styles from "../assets/css/NotFound.module.css";
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={`${styles.NotFound} text-center`}>
      <Asset src={NoResults} message="Sorry, the page you are looking for does not exist" alt="Not found!" />
    </div>
  )
}

export default NotFound