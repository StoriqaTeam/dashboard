// @flow

import React from "react";
import classname from "classnames";
import { propOr } from "ramda";

import { formatNumber } from "utils";

import type { CurrencyType, NumValueType } from "types";

type FormatNumValuePropsType = {
  currency: ?CurrencyType,
  numValue: ?NumValueType
};

const formatNumValueWithCurrency = (
  input: FormatNumValuePropsType,
  toFixed?: number
) => {
  const { currency, numValue } = input;
  const delta = propOr(null, "delta", numValue);
  const value = propOr(null, "value", numValue);
  const deltaChar = propOr("%", "deltaChar", numValue);

  if (!value) {
    return null;
  }

  if (currency === "usd") {
    return (
      <div className="value">
        ${formatNumber(toFixed ? value.toFixed(toFixed) : value)}
        {delta ? (
          <span
            className={classname("delta", {
              positive: delta && delta > 0,
              negative: delta && delta <= 0
            })}
          >
            &nbsp; ({delta > 0 && `+`}
            {formatNumber(delta)}
            {deltaChar || ""})
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <div className="value">
      {/* $FlowIgnoreMe */}
      {`${currency === "btc" ? value.toFixed(8) : value} ${currency &&
        currency.toUpperCase()}`}
      {delta ? (
        <span
          className={classname("delta", {
            positive: delta && delta > 0,
            negative: delta && delta <= 0
          })}
        >
          &nbsp; ({delta > 0 && `+`}
          {formatNumber(delta)}
          {deltaChar || ""})
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default formatNumValueWithCurrency;
