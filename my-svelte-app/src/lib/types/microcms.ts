type GetsType<T> = {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
};
type DateType = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
};
type Structure<T, P> = T extends "get"
    ? { id: string } & DateType & Required<P>
    : T extends "gets"
    ? GetsType<{ id: string } & DateType & Required<P>>
    : Partial<DateType> & (T extends "patch" ? Partial<P> : P);

export type Blogs<T = "get"> = Structure<
    T,
    {
        /**
         * タイトル
         */
        title: string;
        /**
         * 本文
         */
        content?: unknown;
    }
>;

export type EndPoints = {
    get: {
        blogs: Blogs<"get">;
    };
    gets: {
        blogs: Blogs<"gets">;
    };
    post: {
        blogs: Blogs<"post">;
    };
    put: {
        blogs: Blogs<"put">;
    };
    patch: {
        blogs: Blogs<"patch">;
    };
};
