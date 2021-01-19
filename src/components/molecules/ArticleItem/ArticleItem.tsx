import React from "react"
// components
import PhotoPlaceholder from "../../atoms/PhotoPlaceholder"
// styles
import { ArticleItemStyled } from "./StyledArticleItem"

const ArticleItem = ({ article }: any) => {
  const { date, image, title, preamble } = article
  // TODO: show skeletons when re-rendered photos
  return (
    <ArticleItemStyled>
      {image ? (
        <img src={image} alt={title} className="photo" />
      ) : (
        <PhotoPlaceholder />
      )}
      <div className="articleData">
        <div className="info">
          <h1 className="title">{title}</h1>
          <div className="date">{date}</div>
        </div>
        <div className="description">
          {preamble}
        </div>
      </div>
    </ArticleItemStyled>
  )
}

export default ArticleItem
