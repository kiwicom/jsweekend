// @flow

import React from "react";
import { shallow } from "enzyme";
import { Button } from "antd";

import FlightItem from "./FlightItem";

const data = {
  bookingUrl:
    "https://www.kiwi.com/en/booking?passengers=1-0-0&price=71&token=TjFsU9KOyjpEDqm5dNSrO1ZjuRMVMgZrERrSppD325T6P8%2BP9w468E%2B3gYirNKm0xjFEaQ8brFkJXYHcFnHHQCLzHIOgXdSALYw%2B1E9gBHzehP3oO3KisssvQgJDfFJiJCXyuZP0z8q2QAPETD4BlT6MV%2FyZr3iPPE%2FxuAYbCU4mwKr7IERZOle712%2F27OHmiCaTvj2CRXcvwpDc4Eg%2BPsyMJgUlqI%2ByAUHJUX2ou2AcR25ABlm8dmz0jLjplpwY9vQ12DAMdIdOGFNHBGCfWUaNbnTTwGRXM34rbGuthJ9YSId1RhjU0ZQUcCplxm7RTzoR8lGrYHyoYJMFHibLPJ%2F49liazjB2Jzu2GJSC1VbE9YIIzDF7ZIyo%2Bu9Sp89lIScG2D80eHBK9VzXn%2F2YBlvp5w5%2BMAUeS%2FNHHQtDwaoJz9jo3tUw6m9IReG3l3BIpfPl5vc80YvGpL02USYXcN2M7yvPdSdIPHdSx7Feii30MQFa9HhGnew50LtAAEfVks%2FUtH51GLjL0x38uDK1jxzcAJI%2B9NBa26A9ZoK6anTe4xeZOOn5BgcXMSkWw4MKZ4n2ZyQKPjM1%2FZ9Fm6LLF1cktC4TEYxjqXw1F%2Fwwif7QhGIDms%2FaPRxqFa4LzobV1Q51fdQJP5cnrG%2BgmRR2sg%3D%3D",
  price: { amount: 130, currency: "EUR" }
};

describe("FlightItem button click", () => {
  it("should call the new window with bookingUrl", () => {
    window.open = jest.fn();

    shallow(<FlightItem flight={data} />)
      .find(Button)
      .simulate("click");
    expect(window.open).toHaveBeenCalledWith(data.bookingUrl);
  });
});
