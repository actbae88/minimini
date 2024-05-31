import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import SignUp from "./page/SignUp";
import Make from "./page/Make";
import Body1 from "./component/Body1";

const PageRouter = () => {
  return (
      //서브경로가 있는 웹호스팅 서버를 사용한다면.. index.html페이지 위치를 잘못 인식할 수 있음.
    <BrowserRouter basename={ process.env.PUBLIC_URL}>
      <Routes>
        {/* root url -- localhost:3000/ 일때 Main하겠다. */}
        <Route path="/" element={<Main></Main>}></Route>

        {/* 이동할 페이지 경로*/}
        <Route path="/body1/:images" element={<Body1></Body1>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}>
            {/* 중첩 라우팅을 사용하여 공통모양 유지해보기. */}
            {/* <Route path=":no" element={<Make></Make>}></Route> */}
              {/* :id 이자리에는 뭔가를 전달받을거야. */}
              {/* <Route path='/movie/:id' element={<MovieDetail></MovieDetail>}></Route> */}
        </Route>
        <Route path="/make" element={<Make></Make>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
