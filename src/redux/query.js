const initState = {
    information: {
        query: 'love',
    }
}

// 액션객체를 리턴해주는 함수 (사용자가입력한 쿼리 바꾸기가능)
export const changeQuery = (query) => {
    return { type: 'changeQuery', query: query }
}


export default function informationReducer(state = initState, action) {

    switch (action.type) {
        case 'changeQuery':
            return {
                ...state,
                 information: {
                    ...state.information,
                    query: action.query
                 } 
            }
        default:
            return state
    }

 
}