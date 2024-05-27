import styled from "styled-components"

const Image = ({image})=>{
    return(
        <div>
            {/* "title": "벡터 심장 사랑 아이콘, 심장 아이콘, 사랑 아이콘, 심장 PNG, 일러스트 및 벡터 에 대한 무료 다운로드 - Pngtree",
            "link": "https://png.pngtree.com/png-vector/20190505/ourlarge/pngtree-vector-heart-love-icon-png-image_1022282.jpg",
            "thumbnail": "https://search.pstatic.net/sunny/?type=b150&src=https://png.pngtree.com/png-vector/20190505/ourlarge/pngtree-vector-heart-love-icon-png-image_1022282.jpg",
            "sizeheight": "640",
            "sizewidth": "640" */}

            <Container>
                link : {image.link}
                <br></br>
                <img src={image.thumbnail} alt="사진"></img>
            </Container>

        </div>
    )
}
export default Image

const Container = styled.div`
    border: 1px solid firebrick;
    padding: 20;
    background-color: aliceblue;
    margin: 20;
`