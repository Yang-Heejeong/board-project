export default interface BoardItem {
    boardNumber: number;
    title: string;
    contents: string;
    imageUrl: string | null;
    viewCount: number;
    commentCount: number;
    favoriteCount: number;
    writeDatetime: string;
    nickname: string;
    profileImegeUrl: string | null;
}