import styled from 'styled-components'

const Pagination = ({ total, number, page, setPage }) => {
    // 받아온이미지총개수/30 나눈후 반올림
    const button_count = Math.ceil(total / number)

    // 개수만큼의 배열요소가 필요. 요소값을 1부터..
    const numbers = new Array(button_count).fill().map((v, index) => index + 1)


    return (
        <PageButtonContainer>
            {/* 이전 버튼 */}
            <PageButton
                disabled={page == 1 ? 'disable' : null}
                onClick={ ()=>{setPage(page-1)}}
                > &lt; </PageButton>

            {/* 페이지숫자 버튼 */}
            {
                numbers.map((num, index) => {
                    <PageButton
                        key={index}
                        current={page === num ? 'page' : null}
                        onClick={() => setPage(num)}
                    > {num} </PageButton>
                })
            }


            {/* 다음 버튼 */}
            <PageButton
                disabled={page==button_count?'disable' : null} 
                onClick={()=> setPage(page+1)}
            >&gt;</PageButton>

       

        </PageButtonContainer>
    )
}

export default Pagination

const PageButton = styled.button`
    border: 1px solid rebeccapurple;
    width: 40px;
    height: 40px;
    background-color: pink;

    /* 속성선택자 */
    &[current]{
        background-color: orange;
        /* revert :원래 기본값으로 해라 */
        cursor: pointer; 
        
    }
`

const PageButtonContainer= styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`