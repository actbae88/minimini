import { useState } from "react"
import Image from './Image'
import styled from "styled-components"

const Body1 = ({images})=>{

    const [number, setNumber] = useState(9)

    const [page, setPage] = useState(1)

    return(
        <Container>
            <div>
                <h3>바디1.이미지들..</h3>
            </div>

            <div>
                {
                    images.slice(number*(page-1), number*(page-1)+number)
                    .map((image, index, array) => {
                        return <Image image={image}></Image>
                    })
                }
            </div>
        </Container>
    )
}

export default Body1

const Container = styled.div`
    border: 1px dotted rebeccapurple;
`