// @flow

import React from "react";
import classname from "classnames";

import { formatNumber } from "../utils";

import type { CurrencyType, NumValueType } from "../../types";

type FormatNumValuePropsType = {
  currency: CurrencyType,
  numValue: NumValueType
};

const formatNumValueWithCurrency = (input: FormatNumValuePropsType) => {
  const { currency, numValue } = input;
  if (currency === "usd") {
    return (
      <div className="value">
        ${formatNumber(numValue.value)}
        {numValue.delta ? (
          <span
            className={classname("delta", {
              positive: numValue.delta && numValue.delta > 0,
              negative: numValue.delta && numValue.delta <= 0
            })}
          >
            &nbsp; ({numValue.delta > 0 && `+`}
            {formatNumber(numValue.delta)}
            {numValue.deltaChar || ""})
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <div className="value">
      {`${numValue.value} ${currency.toUpperCase()}`}
      {numValue.delta ? (
        <span
          className={classname("delta", {
            positive: numValue.delta && numValue.delta > 0,
            negative: numValue.delta && numValue.delta <= 0
          })}
        >
          &nbsp; ({numValue.delta > 0 && `+`}
          {formatNumber(numValue.delta)}
          {numValue.deltaChar || ""})
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default formatNumValueWithCurrency;
