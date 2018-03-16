// @flow

import DateTime from "./DateTime";

type Props = {
  arrivalTime: ?Date | ?string,
  departureTime: ?Date | ?string,
  areDates?: boolean
};

const DateTimeRange = ({ arrivalTime, departureTime, areDates }: Props) => {
  return (
    <div>
      {departureTime ? (
        <DateTime value={departureTime} isDate={areDates} />
      ) : null}
      {" - "}
      {arrivalTime ? <DateTime value={arrivalTime} isDate={areDates} /> : null}
    </div>
  );
};

export default DateTimeRange;
