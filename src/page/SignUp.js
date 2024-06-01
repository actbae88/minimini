import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserInfo } from "../redux/account";
import styled from "styled-components";
import gong from "../images/gong.jpeg";
import da from "../images/da.jpeg";
import ha from "../images/ha.jpeg";

const SignUp = () => {
  //url parameter받기.. 서브경로[/make/:id] 이때 :id가 변수명
  const param = useParams();
  const [month, setMonth] = useState("월");
  const [gender, setGender] = useState("male");
  const [mans, setMans] = useState([]);

  //   파일리더로 읽어들인 파일의 URL정보 저장 state변수
  const [imageUrls, setImageUrls] = useState([]);
  // user정보 보여주기
  const userInfo = useSelector(
    (state) => state.userInformationReducer.userInformation
  );
  //회원가입하면 유저정보 보여주기
  const dispatch = useDispatch();

  const idRef = useRef(null);
  const pwRef = useRef(null);
  const pw2Ref = useRef(null);
  const yearRef = useRef(null);
  const fileRef = useRef(null);

  const changeCheckbox = (value) => {
    if (mans.includes(value)) {
      const newMans = mans.filter((man, index, array) => {
        return man != value; // 원래있던man이랑 value가 같지않은애들만 통과
      });
      setMans(newMans);
    } else {
      //없으니 추가
      setMans(mans.concat(value));
    }
  };

  const changeFiles = (event) => {
    const files = event.target.files;
    const urls = [];

    for (const file of files) {
      const fr = new FileReader();
      fr.onload = () => {
        urls.push(fr.result);
        if (urls.length === files.length) {
          setImageUrls(urls);
        }
      };
      fr.readAsDataURL(file);
    }
  };

  const submitData = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const pw = pwRef.current.value;
    const pw2 = pw2Ref.current.value;
    const year = yearRef.current.value;
    // + month, gender, mans

    //사진여러개..
    const files = fileRef.current.files;

    // 서버전송 택배상자
    const formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);
    formData.append("year", year);
    formData.append("month", month);
    formData.append("gender", gender);
    formData.append("mans[]", mans); //php에서배열받을때는[]식별자 필요
    for (const file of files) {
      formData.append("imgs[]", file);
    }

    fetch("./backend/signup.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const loginId = json.data.id;
        dispatch(loginUserInfo(id, pw, year, month, gender, mans, files));
      })
      .catch((e) => alert("에러" + e.message));
  };

  return (
    <Container>
      <InnerContainer>
        <h1>PINTEREST SignUp</h1>

        <form onSubmit={submitData}>
          <input
            type="file"
            ref={fileRef}
            multiple
            accept="image/png"
            onChange={changeFiles}
          ></input>
          {/* 이미지들 미리보기 */}
          <div className="fileChoice">
            {imageUrls.map((imgUrl, index, array) => {
              return (
                <img className="img" src={imgUrl} key={index} alt="사진"></img>
              );
            })}
          </div>

          <label>
            ID &nbsp;&nbsp;
            <input
              ref={idRef}
              type="text"
              placeholder="아이디를 입력하세요"
            ></input>
          </label>
          <br></br>
          <label>
            PASSWORD &nbsp;&nbsp; <br></br>
            <input
              ref={pwRef}
              type="password"
              placeholder="비밀번호를 입력하세요"
            ></input>
          </label>
          <br></br>
          <label>
            PASSWORD &nbsp;&nbsp; <br></br>
            <input
              ref={pw2Ref}
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요"
            ></input>
          </label>
          <br></br>
          <label>
            <span id="birth">생년월일 &nbsp;&nbsp;</span>
            <input ref={yearRef} type="text" placeholder="년(4자)"></input>
            <select
              value={month}
              onChange={(event) => {
                setMonth(event.target.value);
              }}
            >
              <option value="월" disabled>
                월{" "}
              </option>
              <option value="1월">1월</option>
              <option value="2월">2월</option>
              <option value="3월">3월</option>
              <option value="4월">4월</option>
              <option value="5월">5월</option>
              <option value="6월">6월</option>
              <option value="7월">7월</option>
              <option value="8월">8월</option>
              <option value="9월">9월</option>
              <option value="10월">10월</option>
              <option value="11월">11월</option>
              <option value="12월">12월</option>
            </select>
          </label>

          <div className="gender">
            <span id="gender">성별 &nbsp;&nbsp;</span>
            <label>
              남 :{" "}
              <input
                type="radio"
                checked={gender == "male"}
                onChange={() => setGender("male")}
              ></input>
            </label>
            <label>
              여 :{" "}
              <input
                type="radio"
                checked={gender == "female"}
                onChange={() => setGender("female")}
              ></input>
            </label>
          </div>

          <div className="style">
            <span id="style">좋아하는<br></br>남자스타일 &nbsp;&nbsp;</span>
            <label className="style">
              공유
              <input
                type="checkbox"
                checked={mans.includes("공유")}
                onChange={() => changeCheckbox("공유")}
              ></input>
            </label>
            <label className="style">
              다나까상
              <input
                type="checkbox"
                checked={mans.includes("다나까상")}
                onChange={() => changeCheckbox("다나까상")}
              ></input>
            </label>
            <label className="style">
              하정우
              <input
                type="checkbox"
                checked={mans.includes("하정우")}
                onChange={() => changeCheckbox("하정우")}
              ></input>
            </label>
          </div>
          <div id="submitDiv">
            <input id="submit" type="submit"></input>
          </div>
        </form>

        <p>
          로그인한 사용자는? {userInfo.id}, {userInfo.pw}
        </p>
      </InnerContainer>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  border: 1px solid black;
  border-width: 3px;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  margin-top: 20px;

  .fileChoice {
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 20px;
    .img {
      width: 30%;
      margin: 4px;
      border: 1px dashed black;
      border-radius: 8px;
      &:hover {
        transform: scale(1.8, 1.8);
        border: 1px solid firebrick;
      }
    }
  }
  h1{text-align:center; color:purple}

  label {
    display: flex;
    input {
      flex-grow: 1;
    }
  }
  #birth,
  #gender,
  #style {
    font-weight: bold;
  
  }

  .gender {
    margin-top: 16px;
    display: flex;
    input {
      flex-grow: 1;
    }
  }
  .style {
    display: inline-block;
    margin-top: 8px;
    :nth-child(2) {
      &:hover {
        background-image: url(${gong});
        background-size: cover;
        width: 100px;
        height: 100px; 
        border-radius: 50%;
      }
    }
    :nth-child(3) {
      &:hover {
        background-image: url(${da});
        background-size: cover;
        width: 100px;
        height: 100px; 
        border-radius: 50%;
      }
    }
    :nth-child(4) {
      &:hover {
        background-image: url(${ha});
        background-size: cover;
        width: 100px;
        height: 100px; 
        border-radius: 50%;
      }
    }
  }
  #submitDiv {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    #submit {
      border: none;
      color: white;
      background-color: black;
      width: 150px;
      padding: 8px;
      display: inline-block;
    }
  }
`;
