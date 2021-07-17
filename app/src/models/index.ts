
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
    user: UserModel,
    url: string,
    isTop: boolean,
    hits: number,
    comments: number,
    thumbnailUrl: string,
    category: CategoryModel,
    tags: Array<TagModel>,
    createTime: string
}

export interface ArticleDetailModel {
    html: string,
    markdown: string,
    id: number,
    title: string,
    titleColor: string,
    subtitle: string,
    introduction: string,
    user: UserModel,
    url: string,
    isTop: boolean,
    hits: number,
    comments: number,
    thumbnailUrl: string,
    category: CategoryModel,
    tags: Array<TagModel>,
    createTime: string
    articleContent: articleContentModel
}


export interface articleContentModel {
    html: string,
    markdown: string
}

export interface UserModel {
    id: number,
    userId: number,
    userType: number,
    userTypeName: string,
    avatarUrl: string,
    userUrl: string,
    name: string,
    company: string,
    location: string,
    email: string,
    bio: string,
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