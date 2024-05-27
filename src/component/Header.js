import { FaPinterest } from "react-icons/fa6";
import styled from 'styled-components'

const Header = () => {
    return (
        <Head>

            {/* 핀터레스트 아이콘 */}
            <FaPinterest id="pinterest" />

            &nbsp;
            {/* 셀렉터 */}
            <select>
                <option value={'home'}>홈</option>
                <option value={'make'}>만들기</option>
            </select>


            <form className="search">
                <input placeholder="검색"></input>
            </form>
        </Head>
    )
}
export default Header

const Head = styled.div`
    border: 1px dotted black;
    display: flex;
    flex-direction: row;
    align-items: center;

    #pinterest{
        color: red;
    }
    select{
        border-radius: 40%;
        font-size: 1rem;
        padding: 1rem 1rem;
        font-weight: 500;
        border: none;
        &:hover{
            cursor: pointer;
            transform: scale(1.05, 1.05);
            /* 전환 */
            background-color: lightgray;
        }
        transition: transform .5s, background-color 1s; //트렌스폼이 0.5초동안 전환되라.
    }

    .search{
       
        width: 90%;
    }
    input{
        border: none;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        border-radius: 30px;
        background-color: lightgray;
        &:hover{
            background-color: pink;
        }
    }
`
