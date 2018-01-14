export interface ApiError {
    code: string;
    message?: string;
}

export interface BookItem {
    author: string;
    barcode: string;
    category: string;
    cover_l_url: string;
    cover_s_url: string;
    description: string;
    ebook_barcode: string;
    etc_author: string;
    isbn: string;
    isbn13: string;
    link: string;
    list_price: string;
    pub_date: string;
    pub_nm: string;
    sale_price: string;
    sale_yn: string;
    status_des: string;
    title: string;
    translator: string;
}

export interface Channel {
    description: string;
    generator: string;
    lastBuildDate: string;
    link: string;
    pageCount: string;
    result: string;
    title: string;
    totalCount: number;
    item: BookItem[];
}

export interface BookSearch {
    channel: Channel;
}
