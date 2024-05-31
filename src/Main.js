import { useEffect, useState } from "react"
import Body1 from "./component/Body1"
import Header from "./component/Header"
import styled from "styled-components"
import { useSelector } from "react-redux"
import SignUp from "./page/SignUp"
import Make from "./page/Make"
import { useNavigate } from "react-router-dom"



const Main = () => {
    // 페이지전환을 해주는 기능함수를 제공한 HOOK 
    const navigate= useNavigate()

    const [images, setImages] = useState(null)
    const [selectedOption, setSelectedOption] = useState("home");

    const information = useSelector(state => state.informationReducer.information)

    const client_id = 'FtDMxIe4fgO50ebkOGVF'
    const client_secret = 'Hk6wVoxydU'

    useEffect(() => {
        // const query = '사랑'
        const url = './backend/naver_search.php?query=' + information.query+'&display=' + 100
        fetch(url).then(res => res.json()).then(json => setImages(json.items)).catch(e => alert(e.message))
    }, [information, selectedOption])


    // useEffect(() => {
    //     if (selectedOption === "home" && images) {
    //         navigate('/body1/' + images);
    //     } else if (selectedOption === "signup") {
    //         navigate('/signup');
    //     } else if (selectedOption === "make") {
    //         navigate('/make');
    //     }
    // }, [selectedOption, images, navigate]);

  

    





    return(
        <Root>
            <h1>메인입니다...</h1>

            <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Header>
{/* 조건부 렌더링은 React에서 제어 흐름을 변경하지만, 페이지 전환은 React Router DOM의 기능입니다. 
이러한 이유로 페이지 전환은 조건부 렌더링 내부에서 직접 호출되어서는 안 됩니다. */}
{/* images ? navigate('/body1/'+images) : <p>Loading....</p> */}
            {selectedOption === "home" ? (
                images? <Body1 images={images}></Body1> : <p>ing............</p>
            ) : selectedOption === "signup" ? (
                navigate('/signup')
            ) : selectedOption === "make" ? (
                navigate('/make')
            ) : null
            }            
        
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
