import { gql } from '@apollo/client'

export const FETCH_ALL_CATEGORIES = gql`
  query Categories {
    categories {
      id
      title
      slug
      description
    }
  }
`

export interface CategoryFeedData {
  categories: Entity.Category[]
}
