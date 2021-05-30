export interface ArticleModel {
    id: number
    status: string
    title: string
    content: string
    fullContent: string
    sourceURL: string
    imageURL: string
    timestamp: number
    platforms: string[]
    disableComment: boolean
    importance: number
    author: string
    reviewer: string
    type: string
    pageviews: number
  }