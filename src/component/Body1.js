import { useState } from "react"
import Image from './Image'
import styled from "styled-components"
import Pagination from "./Pagination"
import { useParams } from "react-router-dom"

const Body1 = ({images}) => {

    //한 페이지에 표시할 이미지개수 저장state변수
    const [number, setNumber] = useState(30)
    //현재 페이지번호 저장state변수
    const [page, setPage] = useState(1)

    return (
        <Container>

            <div className="items">
                {
                    images.slice(number * (page - 1), number * page)
                        .map((image, index, array) => {
                            return <Image image={image} key={index}></Image>
                        })
                }
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
                <Pagination
                    total={images.length}
                    number={number}
                    page={page}
                    setPage={setPage}
                ></Pagination>
            </div>
        </Container>
    )
}

export default Body1

const Container = styled.div`
    margin-top: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
   
    
    
    .items{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        
    }
   
`