import { useEffect, useState } from "react"
import Body1 from "./component/Body1"
import Header from "./component/Header"
import styled from "styled-components"
import { useSelector } from "react-redux"


const Main = () => {

    const [images, setImages] = useState(null)
    const information = useSelector(state=>state.informationReducer.information)

    const client_id = 'FtDMxIe4fgO50ebkOGVF'
    const client_secret = 'Hk6wVoxydU'

    //1.CORS 문제발생 테스트
    useEffect(() => {
        // const query = '사랑'
        const display = 100
        fetch('/v1/search/image?query=' + information.query + '&display='+display, {
            method: 'GET',
            headers: {
                "X-Naver-Client-Id": client_id,
                "X-Naver-Client-Secret": client_secret,
            }
        }).then(res => res.json()).then(json => setImages(json.items)).catch(e => alert(e.message))
    }, [information])



    




    //backend썼을떄...
    const clickBtn2 = () => {
        const query = '사랑'
        const url = './backend/naver_search.php?query=' + query

        fetch(url).then(res => res.json()).then(json => setImages(json.items))
            .catch(e => alert('에러 : ' + e.message))
    }


    return (
        <Root>

            <Header></Header>

            {
                images ? <Body1 images={images}></Body1> : <p>Loading....</p>
            }


            <button onClick={clickBtn2}> 서버에서..</button>

        </Root>
    )
}

export default Main

const Root = styled.div`
    background-color: aliceblue;
    /* min-height: 100%; */
    /* background-image: url('https://raw.githubusercontent.com/light9639/Netflix/main/img/netflix-background-black.jpg') ; */
    background-repeat: no-repeat;
    background-size: cover;

`
