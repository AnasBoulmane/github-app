import React from "react";

import style from "./Repository.module.scss";

const PlaceHolderRepository = () => {
  return (
    <div className={style.Repository}>
      <div className={`ui placeholder ${style.Placeholder}`}>
        <div className="image header">
          <div className="line" />
          <div className="medium line" />
        </div>
      </div>
    </div>
  );
};

export default PlaceHolderRepository;
