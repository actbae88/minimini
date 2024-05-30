import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import SignUp from "./page/SignUp";
import Make from "./page/Make";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root url -- localhost:3000/ 일때 Main하겠다. */}
        <Route path="/" element={<Main></Main>}></Route>


        {/* 이동할 페이지 경로*/}
        <Route path="/signup" element={<SignUp></SignUp>}>
            {/* 중첩 라우팅을 사용하여 공통모양 유지해보기. */}
            {/* <Route path=":no" element={<Make></Make>}></Route> */}
        </Route>

        <Route path="/make" element={<Make></Make>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
