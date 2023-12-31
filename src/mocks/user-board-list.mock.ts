import { BoardItem } from "types";

const userBoardListMock: BoardItem[] =[
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/09/21/20/15/ink-5591145_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2016/03/10/22/34/frogs-1249434_640.jpg',
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/07/20/49/watercolour-2482680_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2021/07/18/10/51/lilies-6475166_640.jpg',
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/12/29/21/36/yellow-3048756_640.jpg',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: 'https://cdn.pixabay.com/photo/2018/08/22/06/47/lemon-3622941_640.jpg',
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 1,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 2,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNu9VFRWGKnKsoYOy9gfMtvGqUa8WwpsL7Q&usqp=CAU',
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    },
    {
        boardNumber: 3,
        title: '안녕하세요',
        contents: '안녕하세요, 반갑습니다.',
        imageUrl: null,
        viewCount: 0,
        commentCount: 0,
        favoriteCount: 0,
        writeDatetime: '2023. 08. 24',
        nickname: '김철수',
        profileImegeUrl: null,
    }
    
];

export default userBoardListMock;