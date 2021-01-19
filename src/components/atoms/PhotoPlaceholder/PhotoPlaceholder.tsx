import React from "react"
// assets
import imgPlaceholder from "../../../assets/icons/picture.svg"

const PhotoPlaceholder = () => (
  <div className="img-placeholder">
    <img src={imgPlaceholder} alt="image placeholder" width={300} height={200} />
  </div>
)

export default PhotoPlaceholder
