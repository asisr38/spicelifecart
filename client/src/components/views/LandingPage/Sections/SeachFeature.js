import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SeachFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };
  return (
    <div>
      <Search
        value={SearchTerm}
        onChange={onChangeSearch}
        placeholder="Seach by typing..."
      ></Search>
    </div>
  );
}

export default SeachFeature;
