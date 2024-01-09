import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from 'moment';
import './mediaPreview.scss';
import { Button } from "react-bootstrap";

function MediaPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mediaItem = useSelector((state) => state?.list?.data?.results?.find((x) => x.imdbID === id)) || {};
  const {
    Title, Poster, Year, Type
  } = mediaItem;

  return (
    <>
      <Button className="w-100" variant="outline-danger" onClick={() => navigate('/')}>{`<< Back`}</Button>
      <div className="media">
        <figure className="movie">
          <div className="movie__hero">
            <img
              src={Poster}
              alt={id}
              className="movie__img" />
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">Category: {Type} <i className="fas fa-fire"></i></h1>
              <div className="movie__tag movie__tag--1">#action</div>
              <div className="movie__tag movie__tag--2">#thriller</div>
            </div>
            <p className="movie__description">
              {Title}
            </p>
            <div className="movie__details">
              <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar"></i>
              </span>Created in {moment(Year, "YYYYMMDD").format("YYYY")}</p>
            </div>
          </div>
          <div className="movie__price">
            Since: {moment(Year, "YYYYMMDD").format("YYYY")}
          </div>
        </figure>
      </div>
    </>
  );
}

export { MediaPreview };
