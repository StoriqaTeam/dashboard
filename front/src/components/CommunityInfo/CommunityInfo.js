// @flow

import React, { PureComponent } from "react";
import type { Node } from "react";
import { addIndex, map } from "ramda";
import moment from "moment";

import { formatNumValue } from "utils";

import type { NumValueType } from "types";

import "./CommunityInfo.scss";

import mock from "./mock";

type PropsType = {|
  telegram: {
    members: NumValueType,
    emails: NumValueType
  },
  facebook: {
    likes: NumValueType
  },
  twitter: {
    members: NumValueType
  },
  emails: {
    emails: NumValueType
  }
|};

type IconType =
  | "telegram"
  | "facebook"
  | "twitter"
  | "email"
  | "icon_member"
  | "icon_email"
  | "icon_like";

const getIcon = (type: ?IconType): ?Node => {
  switch (type) {
    case "telegram":
      return <img src={require("./img/telegram.svg")} alt="" />;
    case "facebook":
      return <img src={require("./img/fb.svg")} alt="" />;
    case "twitter":
      return <img src={require("./img/twitter.svg")} alt="" />;
    case "email":
      return <img src={require("./img/email_white.svg")} alt="" />;
    case "icon_member":
      return <img src={require("./img/member.svg")} alt="" />;
    case "icon_email":
      return <img src={require("./img/email_gray.svg")} alt="" />;
    case "icon_like":
      return <img src={require("./img/luiza.svg")} alt="" />;
    default:
      return <div />;
  }
};

type RenderItemInputType = {
  icon: IconType,
  title: string,
  statsValues: Array<{
    icon: ?IconType,
    value: NumValueType
  }>
};

const indexedMap = addIndex(map);

const renderItem = (input: RenderItemInputType) => {
  return (
    <div className="statsRow">
      <div className="statsRowTitle">
        {getIcon(input.icon)}
        <span className="statsTitle">{input.title}</span>
      </div>
      <div className="statsValues">
        {indexedMap(
          (item: { icon: ?IconType, value: NumValueType }, idx: number) => (
            <div className="statsValueRow" key={`stats-key-${idx}`}>
              {getIcon(item.icon)}
              <span>{formatNumValue(null, item.value)}</span>
            </div>
          ),
          input.statsValues
        )}
      </div>
    </div>
  );
};

class CommunityInfo extends PureComponent<PropsType> {
  render() {
    const { telegram, facebook, twitter, emails } = mock;
    return (
      <div className="CommunityInfo widget">
        {/* <div className="title">
          <h2>Community</h2>
          <span>{moment().format("DD MMM")}</span>
        </div>
        {renderItem({
          icon: "telegram",
          title: "Telegram",
          statsValues: [
            { icon: "icon_member", value: telegram.members },
            { icon: "icon_email", value: telegram.emails }
          ]
        })}
        {renderItem({
          icon: "facebook",
          title: "Facebook",
          statsValues: [{ icon: "icon_like", value: facebook.likes }]
        })}
        {renderItem({
          icon: "twitter",
          title: "Twitter",
          statsValues: [{ icon: "icon_member", value: twitter.members }]
        })}
        {renderItem({
          icon: "email",
          title: "Emails",
          statsValues: [{ icon: null, value: emails.emails }]
        })} */}
      </div>
    );
  }
}

export default CommunityInfo;
