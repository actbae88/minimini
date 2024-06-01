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


const Item = styled.div`
        margin-top: 12px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
        min-width: 300px;
        max-width: 500px;
     

       

        .img{
            min-height: 300px;
            border-radius: 10%;
        }
    `

