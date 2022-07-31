import React, {useState, useEffect} from "react";
import Select from "./Select";

const LanguageDropDown = ({onChange, language_list}) => {

  const language = (
    <Select options={language_list} handleChange={onChange}/>
) 

return language;
}

export default LanguageDropDown;