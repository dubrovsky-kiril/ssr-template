import React, { useState } from "react";
import DumbInput from "./Input.dumb.jsx";

const handleOnChange = changeSeoTitle => e => changeSeoTitle(e.target.value);

const SmartInput = () => {
  const [seo_title, changeSeoTitle] = useState("");

  return (
    <form id="article-form">
      <DumbInput
        text="SEO title"
        label="seo_title"
        type="text"
        id="seo_title"
        value={seo_title}
        handleOnChange={handleOnChange(changeSeoTitle)}
      />
    </form>
  )
}

export default SmartInput;


