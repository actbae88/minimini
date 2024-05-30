import { useState } from "react"
import Image from './Image'
import styled from "styled-components"
import Pagination from "./Pagination"

const Body1 = ({ images }) => {

    //한 페이지에 표시할 이미지개수 저장state변수
    const [number, setNumber] = useState(30)
    //현재 페이지번호 저장state변수
    const [page, setPage] = useState(1)

    return (
        <Container>
            <div>
                <h3>바디..이미지들..   </h3>
            </div>

            <div className="items">


                {
                    images.slice(number * (page - 1), number * (page - 1) + number)
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
    border: 1px dotted red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

    .items{
        
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
   
`