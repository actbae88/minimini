import { useParams } from "react-router-dom";
import { useState, useRef } from "react";



const SignUp = () => {
  //url parameter받기.. 서브경로[/make/:id] 이때 :id가 변수명
  const param = useParams();
  const [month, setMonth] = useState("월");
  const [gender, setGender] = useState("male");
  const [mans, setMans] = useState([]);
//   파일리더로 읽어들인 파일의 URL정보 저장 state변수
  const [imageUrls, setImageUrls] = useState([])

  const idRef = useRef(null);
  const pwRef = useRef(null)
  const pw2Ref = useRef(null)
  const yearRef = useRef(null)
  const fileRef = useRef(null)




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



  const changeFiles = (event)=>{
    const files = event.target.files
    const urls= []
    
    for(const file of files){
        const fr = new FileReader()
        fr.onload = ()=>{
            urls.push(fr.result)
            if(urls.length===files.length){
                setImageUrls(urls)
            }
        }
        fr.readAsDataURL(file)
    }
    
  }



  const submitData = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const pw = pwRef.current.value
    const pw2= pw2Ref.current.value
    const year = yearRef.current.value
    // + month, gender, mans

    //사진여러개..
    const files = fileRef.current.files
    

    // 서버전송 택배상자
    const formData = new FormData()
    formData.append('id', id)
    formData.append('pw', pw)
    formData.append('year', year)
    formData.append('month', month)
    formData.append('gender', gender)
    formData.append('mans[]', mans)//php에서배열받을때는[]식별자 필요
    for(const file of files){
        formData.append('imgs[]', file)
    }

    fetch('./backend/signup.php',{
        method:'POST',
        body: formData,
    }).then(res=>res.text()).then(json=>console.log(json)).catch(e=>alert("에러"+e.message))
    
  };





  return (
    <div style={{ padding: 16 }}>
      <h1>PINTEREST</h1>

      <form onSubmit={submitData}>

        <input type="file" ref={fileRef} multiple accept="image/png" onChange={changeFiles}></input>
        {/* 이미지들 미리보기 */}
        <div style={{borderTop:'2px solid black', borderBottom:'2px solid black', padding: 8}}>
            {
                imageUrls.map( (imgUrl, index, array)=>{
                    return <img src={imgUrl} key={index} style={{width:'20%', margin:4, border:'1px solid blue'}} alt="사진"></img>
                })
            }
        </div>


        <label>
          아이디 <br></br>
          <input ref={idRef} type="text" placeholder="아이디~~"></input>
        </label>
        <br></br>
        <label>
          비밀번호 <br></br>
          <input ref={pwRef} type="password"></input>
        </label>
        <br></br>
        <label>
          비밀번호 재확인<br></br>
          <input ref={pw2Ref} type="password"></input>
        </label>
        <br></br>
        <label>
          생년월일<br></br>
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

        <div>
          성별 <br></br>
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

        <div>
          좋아하는 남자스타일 <br></br>
          <label>
            공유
            <input
              type="checkbox"
              checked={mans.includes("공유")}
              onChange={() => changeCheckbox("공유")}
            ></input>
          </label>
          <label>
            다나까상
            <input
              type="checkbox"
              checked={mans.includes("다나까상")}
              onChange={() => changeCheckbox("다나까상")}
            ></input>
          </label>
          <label>
            하정우
            <input
              type="checkbox"
              checked={mans.includes("하정우")}
              onChange={() => changeCheckbox("하정우")}
            ></input>
          </label>
        </div>

        <input type="submit"></input>


      </form>
    </div>
  );
};

export default SignUp
