export type ProjectCreate = {
    title: string;
}

export type Project = {
    id: string;
    title: string;
    created_at: string;
    creator: string;
    project_key: string;
}