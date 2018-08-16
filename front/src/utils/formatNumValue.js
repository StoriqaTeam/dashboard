// @flow

import React from "react";
import type { Node } from "react";
import { propOr } from "ramda";

import { formatNumber } from "utils";

import type { NumValueType } from "types";

const formatNumValue = (title: ?string, numValue: ?NumValueType): Node => {
  const value = propOr(null, "value", numValue);
  const delta = propOr(null, "delta", numValue);
  const deltaChar = propOr(null, "deltaChar", numValue);

  if (!value) {
    return null;
  }

  return (
    <div className="row">
      <div className="title">{title}</div>
      <div className="value">
        {formatNumber(value)}{" "}
        {delta &&
          (delta > 0 ? (
            <span className="positive">
              (+
              {delta})
            </span>
          ) : (
            <span className="negative">({delta})</span>
          ))}
      </div>
    </div>
  );
};

export default formatNumValue;
