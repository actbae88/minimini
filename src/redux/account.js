const initState= {
    userInformation: {
        id : "아이디없음",
        pw : "비밀번호없음",
        year : null,
        month : null,
        gender : null,
        mans : [],
        imgs : null,
        
    },
}

// 액션 객체를 리턴해주는 함수 (회원가입(로그인) 후 받아온 response를 리덕스에 저장)
export const loginUserInfo = (id,pw, year, month, gender, mans, imgs)=>{
    return {
        type: 'login', 
        loginUser:{id, pw, year, month, gender, mans, imgs}
    }
}

export const logoutUserInfo = ()=>{
    return {
        type : 'logout',
        logoutUser:{
            id: "아이디는 뭘까",
            pw: "패쓰워드는 뭘까",
            year: "공룡시대에 태어났음",
            month:null,
            gender:null,
            mans:null,
            imgs:null,
        }
    }
}

export default function userInformationReducer(state = initState, action){

    switch(action.type) {
        case 'login':
            return{
                ...state,
                userInformation: {
                    id: action.loginUser.id,
                    pw: action.loginUser.pw,
                    year: action.loginUser.year,
                    month: action.loginUser.month,
                    gender: action.loginUser.gender,
                    mans: action.loginUser.mans,
                    imgs: action.loginUser.imgs,
                }
            }
        case 'logout':
            return{
                ...state,
                userInformation: {
                    id: action.logoutUser.id,
                    pw: action.logoutUser.pw,
                    year: action.logoutUser.year,
                    month: action.logoutUser.month,
                    gender: action.logoutUser.gender,
                    mans: action.logoutUser.mans,
                    imgs: action.logoutUser.imgs,
                }
            }
        default:
            return state
    }

}
