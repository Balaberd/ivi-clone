import { TMovieQueryParams } from "../movie.types";

export const getUrlParam = (params: TMovieQueryParams): string => {
  const paramsArray = Object.entries(params);
  if (!paramsArray.length) {
    return "";
  }

  let result = "?";
  for (let i = 0; i < paramsArray.length; i += 1) {
    if (i > 0) {
      result += "&";
    }
    result += `${paramsArray[i][0]}=${paramsArray[i][1]}`;
  }
  return result;
};
