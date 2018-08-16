// @flow

const format = (value: ?number): string => (value || 0).toLocaleString("ru-RU");

export default format;
