import React from "react"
// constants
import { SortingType } from "../../../constants/ArticleCategory"
// styles
import { ButtonStyled } from "./ButtonsStyled"
// assets
import arrowTop from "../../../assets/icons/arrow-top.svg"
import arrowBottom from "../../../assets/icons/arrow-bottom.svg"

const ButtonSorting = ({ sortBy, onClick }: any) => {
  // TODO: better configure webpack to load svg as component and and creating a styled component that will take props reverse and rotate the arrow depending on the direction
  const arrowSort =
    sortBy === SortingType.ASC ? (
      <img src={arrowTop} alt="arrow" className="arrow-icon" />
    ) : (
      <img src={arrowBottom} alt="arrow" className="arrow-icon" />
    )
  return (
    <ButtonStyled onClick={onClick}>
      <div className="content">
        <div>Date</div>
        <div>{arrowSort}</div>
      </div>
    </ButtonStyled>
  )
}

export default ButtonSorting
