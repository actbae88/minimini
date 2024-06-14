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

    // const client_id = 'FtDMxIe4fgO50ebkOGVF'
    // const client_secret = 'Hk6wVoxydU'

    useEffect(() => {
        // const query = '사랑'
        const url = './backend/naver_search.php?query=' + information.query+'&display=' + 100
        fetch(url).then(res => res.json()).then(json => setImages(json.items)).catch(e => alert(e.message))
    }, [information])



    return(
        <Root>
         
            <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Header>
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
    background-color: white;
    padding: 16px;

    
    

`
