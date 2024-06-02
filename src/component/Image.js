import styled from "styled-components"
import { useState } from 'react'

const Image = ({ image }) => {


    const [imgSrc, setImgSrc] = useState(image.thumbnail)


    return (


        <Item>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                    className="img"
                    src={image.thumbnail}
                    alt="사진"
                   
                />
            </a>
        </Item>


    )
}
export default Image

//    gap: 20px;
//margin-right: 10px;
const Item = styled.div`
        margin-top: 30px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
     
        width: 100%;
        max-width: 300px;
        
     

       

        .img{
            width: 100%;
            min-height: 300px;
            border-radius: 10%;
        }
    `
