import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../assets/css/Asset.module.css";

const Asset = ({ spinner, src, message, alt }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={alt || message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
