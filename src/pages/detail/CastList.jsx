import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import avatar from "../../assets/images.png";
const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 6));
      console.log(res.cast.slice(0, 6)[5]);
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={
              item.profile_path === null
                ? {
                    backgroundImage: `url(${avatar})`,
                    backgroundPosition: "center",
                  }
                : {
                    backgroundImage: `url(${apiConfig.w500Image(
                      item.profile_path
                    )})`,
                  }
            }
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
