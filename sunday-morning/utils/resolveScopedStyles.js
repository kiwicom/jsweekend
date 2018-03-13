// @flow

import * as React from "react";

export default function resolveScopedStyles(scope: React.Element<any>) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}
