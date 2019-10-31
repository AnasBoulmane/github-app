import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

import { IRepository } from "../../types/Repository";

import style from "./Repository.module.scss";

dayjs.extend(relativeTime);

const Repository = (props: IRepository) => {
  const {
    id,
    url,
    name,
    createdAt,
    description,
    owner: { avatarUrl, login },
    stargazers: { totalCount: starCount },
    issues: { totalCount: issueCount },
  } = props;
  return (
    <div className={style.Repository}>
      <img className={style.Avatar} src={avatarUrl} alt={login} />
      <div className={style.Info}>
        <h4 className={style.Name}>{name}</h4>
        <p className={style.Description}>{description}</p>
        <div className={style.Footer}>
          <span>{starCount}</span>
          <span>{issueCount}</span>
          <span>{dayjs().from(dayjs(createdAt))}</span>
        </div>
      </div>
    </div>
  );
};

export default Repository;
