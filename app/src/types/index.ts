// 文章列表项
export interface ArticleListItem {
    id: number,
    title: string,
    titleColor: string,
    subtitle: string,
    introduction: string,
    author: string,
    url: string,
    isTop: boolean,
    hits: number,
    comments: number,
    thumbnailUrl: string,
    category: Category,
    tags: Array<Tag>,
    createTime: string
}

export interface Category {
    id: number,
    name: string,
    sort: number,
    createTime: string
}

export interface Tag {
    id: number,
    name: string,
    sort: number,
    createTime: string,
}
