import React, { lazy, Suspense } from 'react';

// reactstrap components
// import {
// } from "reactstrap";
// core components
import IndexNavbar from './components/Navbars/IndexNavbar.js';
import DarkFooter from './components/Footers/DarkFooter.js';

// sections for this page
import NucleoIcons from "./views/index-sections/NucleoIcons.js";
import {Outlet, Route, Routes} from "react-router-dom";
import LandingPage from "./views/examples/LandingPage";
import ProfilePage from "./views/examples/ProfilePage";
import LoginPage from "./pages/member/LoginPage";
import Home from "./pages/home/Home";
import LectureList from "./pages/lecture/list/LectureList";

import CodingtestView from "./pages/codingtest/CodingtestView";

import CodingtestList from "./pages/codingtest/CodingtestList";
import SignUp from "./pages/member/SignUp";
import CodingtestResult from "./pages/codingtest/CodingtestResult";
import FindByPass from "./pages/member/FindByPass";
import CompanyList from "./pages/company/CompanyList";
import CompanyView from "./pages/company/CompanyView";
import LectureView from "./pages/lecture/view/LectureView";

import LectureDetail from "./pages/lecture/detail/LectureDetail";

import CodingtestQna from "./pages/codingtest/CodingtestQna";
import CodingtestQnaView from "./pages/codingtest/CodingtestQnaView";
import CodingtestQnaWrite from "./pages/codingtest/CodingtestQnaWrite";
import CodingtestBestCode from "./pages/codingtest/CodingtestBestCode";
import CommunityList from "./pages/community/CommunityList";
import CommunityView from "./pages/community/CommunityView";
import CommunityWrite from "./pages/community/CommunityWrite";
import CompanyApply from "./pages/company/CompanyApply";
import CompanyBookmark from "./pages/company/CompanyBookmark";
import FindByEmail from "./pages/member/FindByEmail";
import FinishSignup from "./pages/member/FinishSignup";



const LectureHome = lazy(() => import("./pages/lecture/home/LectureHome"));


function App() {
    function fallback() {
        return <i>loading....</i>
    }

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <Routes>

                <Route path="/lecture/detail/:id" element={<LectureDetail/>}/>
                <Route path="/" element={<>

                    <IndexNavbar/>
                    <div className="main">
                        <Outlet></Outlet>
                    </div>
                    <DarkFooter/>
                </>}>
                    <Route path="/" element={<Home/>}>

                    </Route>

                    <Route path="member" element={<Suspense fallback={fallback()}><Outlet /></Suspense>}>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                        <Route path="finishSignup" element={<FinishSignup/>}/>
                        <Route path="findByPass" element={<FindByPass/>}/>
                        <Route path="findByEmail" element={<FindByEmail/>}/>
                    </Route>

                    <Route path="company" element={<Suspense fallback={fallback()}><Outlet /></Suspense>}>
                        <Route path="list" element={<CompanyList />}></Route>
                        <Route path="view" element={<CompanyView />}></Route>
                        <Route path="apply" element={<CompanyApply />}></Route>
                        <Route path="bookmark" element={<CompanyBookmark />}></Route>
                    </Route>

                    <Route path="/codingTest/list" element={<CodingtestList/>}>


                </Route>
                    <Route path="/codingTest/Result" element={<CodingtestResult/>}>

                    </Route>
                    <Route path="/codingTest/Qna" element={<CodingtestQna/>}>

                    </Route>
                <Route path="/codingTest/View" element={<CodingtestView/>}>

                    </Route>
                    <Route path="/codingTest/view" element={<CodingtestView/>}>

                    </Route>
                    <Route path="/codingtest/Qna/View" element={<CodingtestQnaView/>}>

                    </Route>
                    <Route path="/codingtest/Qna/write" element={<CodingtestQnaWrite/>}>
                    </Route>
                    <Route path="/codingtest/Qna/best" element={<CodingtestBestCode/>}>
                    </Route>
                    <Route path="lecture" element={<><Suspense fallback={fallback()}>
                        <Outlet></Outlet>
                     </div>
                     <DarkFooter />
                  </>
               }>
               <Route path="/" element={<Home />}></Route>

               <Route
                  path="member"
                  element={
                     <Suspense fallback={fallback()}>
                        <Outlet />
                     </Suspense>
                  }>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="findByPass" element={<FindByPass />} />
               </Route>

               <Route
                  path="company"
                  element={
                     <Suspense fallback={fallback()}>
                        <Outlet />
                     </Suspense>
                  }>
                  <Route path="list" element={<CompanyList />}></Route>
                  <Route path="view" element={<CompanyView />}></Route>
               </Route>

               <Route path="/codingTest/list" element={<CodingtestList />}></Route>
               <Route path="/codingTest/Result" element={<CodingtestResult />}></Route>
               <Route path="/codingTest/Qna" element={<CodingtestQna />}></Route>
               <Route path="/codingTest/View" element={<CodingtestView />}></Route>
               <Route path="/codingtest/Qna/View" element={<CodingtestQnaView />}></Route>
               <Route path="/codingtest/Qna/write" element={<CodingtestQnaWrite />}></Route>
               <Route path="/codingtest/Qna/best" element={<CodingtestBestCode />}></Route>
               <Route
                  path="lecture"
                  element={
                     <>
                        <Suspense fallback={fallback()}>
                           <Outlet></Outlet>
                        </Suspense>
                     </>
                  }>
                  <Route path="list" element={<LectureList></LectureList>}></Route>
                  <Route path="index" element={<LectureHome></LectureHome>}></Route>
                  <Route path="view" element={<LectureView></LectureView>}></Route>
               </Route>
               <Route path="community">
                  <Route path={'list'} element={<CommunityList></CommunityList>} />
                  <Route path={'view'} element={<CommunityView></CommunityView>} />
                  <Route path={'write'} element={<CommunityWrite></CommunityWrite>} />
               </Route>
               <Route path="my"></Route>
            </Route>
            <Route path="/nucleo-icons" element={<NucleoIcons />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route
               path="*"
               element={
                  <>
                     {/*<Navigate to="/" replace/>*/}
                     <div>404Page</div>
                  </>
               }
            />
         </Routes>
         {/*얘네가 인덱스*/}
      </>
   );
}

export default App;
