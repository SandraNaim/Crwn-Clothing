import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {

  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {
        sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} /> //similar to title={title} imageUrl={imageUrl} ..etc
        ))
      }
    </div>
  )
}

export default Directory;
