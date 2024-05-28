import styled from "styled-components"
import { useState } from 'react'

const Image = ({ image }) => {


    const [imgSrc, setImgSrc] = useState(image.thumbnail)


    return (


        <Item>
            <a href={image.link} target="_blank">
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        border: 1px solid lightcoral;
        border-radius: 12px;
       padding: 4px;

        .img{
            width: 100%;
            border-radius: 30%;
            border: 1px solid firebrick;
        }
    `

