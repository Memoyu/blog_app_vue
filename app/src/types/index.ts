
// 文章列表项
export interface ArticlePageModel {
    total: number;
    items: Array<ArticleItemModel>;
}

export interface ArticleItemModel {
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
    category: CategoryModel,
    tags: Array<TagModel>,
    createTime: string
}

export interface CategoryModel {
    id: number,
    name: string,
    sort: number,
    createTime: string
}

export interface CategoryTotalModel extends CategoryModel {
    total: number
}


export interface TagModel {
    id: number,
    name: string,
    sort: number,
    createTime: string,
}

export interface TagTotalModel extends TagModel{
    total: number
}

export interface ServerInfoModel {
    environmentName: string,
    osArchitecture: string,
    contentRootPath: string,
    webRootPath: string,
    frameworkDescription: string,
    memoryFootprint: string,
    workingTime: string
}

export interface BlogInfoModel {
    articleTotal: number,
    categoryTotal: number,
    tagTotal: number,
    commentTotal: number
}