import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

import { Issues } from "../../svg/Issues";
import { Star } from "../../svg/Star";
import { IRepository } from "../../types/Repository";
import PlaceHolder from "./PlaceHolderRepository";

import style from "./Repository.module.scss";

dayjs.extend(relativeTime);

export const Repository = (props: IRepository) => {
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
    <a href={url} key={id} className={style.Repository}>
      <img className={style.Avatar} src={avatarUrl} alt={login} />
      <div className={style.Info}>
        <h4 className={style.Name}>{name}</h4>
        <p className={style.Description}>{description}</p>
        <div className={style.Footer}>
          <span>{starCount} (Star) </span>
          <span>{issueCount} (Issues) </span>
          <span>{dayjs(createdAt).fromNow(true)}</span>
        </div>
      </div>
    </a>
  );
};

export const PlaceHolderRepository = PlaceHolder;

export default Repository;
