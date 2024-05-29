import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Main'
import Make from './page/make'


const PageRouter= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                {/* root url -- localhost:3000 */}
                <Route path='/' element={<Main></Main>}></Route>
                {/* 이동할 페이지 경로. :id 자리에 뭔가를 전달받겠다.. */}
                {/* <Route path='/make/:id' element={<Make></Make>}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter