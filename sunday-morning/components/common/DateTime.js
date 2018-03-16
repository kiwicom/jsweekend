// @flow

import moment from "moment";

type Props = { value: ?moment | ?Date | ?string, isDate?: boolean };

const DateTime = ({ value, isDate }: Props) => {
  const format = isDate ? "dd MMM D" : "HH:mm";
  return value ? (
    <time dateTime={value}>{moment.utc(value).format(format)}</time>
  ) : null;
};

export default DateTime;
