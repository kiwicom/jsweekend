// @flow

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

type Props = {
  value: ?number
};

const Duration = ({ value }: Props) =>
  value ? moment.duration(value, "minutes").format("h[h] m[m]") : null;

export default Duration;
