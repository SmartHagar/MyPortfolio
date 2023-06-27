/** @format */

import React from "react";
import { BASE_URL } from "./baseURL";
import Image from "next/image";

const getProperty = (obj: any, prop: any) => {
  var parts = prop.split(".");
  if (Array.isArray(parts)) {
    var last = parts.length > 1 ? parts.pop() : parts;
    var l = parts.length,
      i = 1,
      current = parts[0];
    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj ? obj[last] : "";
    }

    if (prop === "image") {
      return (
        obj && (
          <Image src={`${BASE_URL}/${obj}`} width={100} height={100} alt="" />
        )
      );
    }
    return obj;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default getProperty;
