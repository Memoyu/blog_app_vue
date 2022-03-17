// 分页
export interface Page<T> {
    total: number;
    items: Array<T>;
}