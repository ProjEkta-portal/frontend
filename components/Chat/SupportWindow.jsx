import React, { useState } from "react";

import { styles } from "./styles";
import ChatEngine from "./ChatEngine";

const SupportWindow = (props) => {
  return (
    <div
      className="transition-5 z-50"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <ChatEngine visible={true} />
    </div>
  );
};

export default SupportWindow;
