import { useEffect, useState } from "react"
import Body1 from "./component/Body1"
import Header from "./component/Header"
import styled from "styled-components"


const Main = () => {

    const [images, setImages] = useState(null)

    const client_id = 'FtDMxIe4fgO50ebkOGVF'
    const client_secret = 'Hk6wVoxydU'

    // useEffect(() => {
    //     const apiUrl = ""

    //     fetch("")
    // }, [])

    // const clickBtn = () => {
    //     const query = '사랑'
    //     const url = './backend/naver_search.php?query=' + query

    //     fetch(url).then(res => res.text()).then(text => alert(text))
    //         .catch(e => alert('에러 : ' + e.message))
    // }


    // useEffect(() => {
    //     const query = '사랑'
    //     const url = './backend/naver_search.php?query=' + query

    //     fetch(url).then(res => res.json()).then(json => setImages(json.items))
    //         .catch(e => alert('에러 : ' + e.message))
    // }, [])

    const clickBtn1 = () => {
        //1.CORS 문제발생 테스트
        fetch('/v1/search/image', {
            method: 'GET',
            headers: {
                "X-Naver-Client-Id": client_id,
                "X-Naver-Client-Secret": client_secret,
            }
        }).then(res => res.json()).then(json => setImages(json.item)).catch(e => alert(e.message))
    }

    const clickBtn2= ()=>{
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

            <button onClick={clickBtn1}>froxy로 우선...</button>
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
