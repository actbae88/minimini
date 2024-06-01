import { FaPinterest } from "react-icons/fa6";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuery } from "../redux/query";

const Header = ({ selectedOption, setSelectedOption }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Hook으로..store의 information 보여주기..
  const information = useSelector(
    (state) => state.informationReducer.information
  );
  const dispatch = useDispatch();

  return (
    <Head>
      {/* <p style={{border:'1px solid red'}} onClick={()=>dispatch(changeQuery('kokodfdsf'))}>누르면바뀌는쿼리는 :{information.query} </p> */}
      {/* 핀터레스트 아이콘 */}
      <FaPinterest id="pinterest" />
      &nbsp;
      {/* 셀렉터 */}
      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
      >
        <option value={"home"}>홈</option>
        <option value={"signup"}>가입하기</option>
        <option value={"make"}>만들기</option>
      </select>
      {/* option - home일때만  폼나오게*/}
      {selectedOption === "home" && (
        <form
          className="search"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(changeQuery(searchQuery));
          }}
        >
          <input
            type="search"
            placeholder="검색"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          ></input>
        </form>
      )}
    </Head>
  );
};
export default Header;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  #pinterest {
    padding: 8px;
    color: red;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    &:hover {
      background-color: lightgray;
      border-radius: 50%;
    }
  }
  select {
    border-radius: 50%;
    font-size: 16px;
    padding: 1rem 1rem;
    font-weight: 500;
    border: none;
    margin-right: 12px;
    &:hover {
      cursor: pointer;
      transform: scale(1.15, 1.15) rotate(360deg);
      /* 전환 */
      background-color: black;
      color: white;
      margin-right: 12px;
    }
    transition: transform 0.4s, background-color 0.4s, margin-right 0.4s; //트렌스폼이 0.5초동안 전환되라.
  }

  .search {
    width: 80%;

    input {
      border: none;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem;
      border-radius: 30px;
      background-color: #e7e7e7;
      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }
      &::placeholder {
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
      &:focus {
        outline-color: cornflowerblue;
        outline-width: 5px;
        outline-style: solid;
      }
    }
  }
`
