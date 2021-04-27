export interface List {
    id: string,
    name: string,
    parent: string | null,
    children?: Array<List>
}