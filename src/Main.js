import { useEffect, useState } from "react"
import Body1 from "./component/Body1"
import Header from "./component/Header"
import styled from "styled-components"
import { useSelector } from "react-redux"
import SignUp from "./page/SignUp"
import Make from "./page/Make"



const Main = () => {

    const [images, setImages] = useState(null)
    const [selectedOption, setSelectedOption] = useState("home");

    const information = useSelector(state => state.informationReducer.information)

    const client_id = 'FtDMxIe4fgO50ebkOGVF'
    const client_secret = 'Hk6wVoxydU'

    //1.CORS 문제발생 테스트
    useEffect(() => {
        // const query = '사랑'
        const display = 100
        const url = './backend/naver_search.php?query=' + information.query+'&display='+display
        fetch(url).then(res => res.json()).then(json => setImages(json.items)).catch(e => alert(e.message))
    }, [information, selectedOption])



    


    return(
        <Root>

            <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Header>

            {/* selectedOption이 home일때는 <Body1>붙이고, make일때는 <Make>붙이기</Make> */}
            selectedOption === "home" ? (
                images ? <Body1 images={images}></Body1> : <p>Loading....</p>
            ) : selectedOption === "signup" ? (
                <SignUp></SignUp>
            ) : selectedOption === "make" ? (
                <Make></Make>
            )
        

            

         

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
