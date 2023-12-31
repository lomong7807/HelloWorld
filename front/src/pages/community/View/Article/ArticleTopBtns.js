import React from 'react';
import '../../../../css/community/view.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {API_BASE_URL, apiClient} from "../../../../App";

function ArticleTopBtns ({view, prevNo, nextNo, setCateNo, setCommunityNo, myInfo, storeCateNo, listURL}){
    let navigate = useNavigate();
    return(<>
        <div className="ArticleTopBtns">
            {view.uid === myInfo.uid && <div className="left_area">{/*빈 공간*/}
                <a role="button" className="BaseButton BaseButton--skinGray size_default" onClick={() => {
                    if (window.confirm('수정하시겠습니까?'))
                        apiClient.get(`/community/modify`, {params: {communityNo: view.communityNo, uid: myInfo.uid}}).then(() => {
                            navigate(`community/list?cateNo=${storeCateNo.no}`);
                        })
                }}>{/*<!---->*/}
                    <span className="BaseButton__txt"> 수정 </span>
                </a>
                <a role="button" className="BaseButton BaseButton--skinGray size_default" onClick={() => {
                    if (window.confirm('삭제하시겠습니까?'))
                        apiClient.get(`/community/view/delete`, {params: {communityNo: view.communityNo, uid: myInfo.uid}}).then(() => {
                            alert('삭제되었습니다.');
                            navigate(`community/list?cateNo=${storeCateNo.no}`);
                        })
                }}>{/*<!---->*/}
                    <span className="BaseButton__txt"> 삭제 </span>
                </a>
            </div>}
            <div className="right_area">
                { prevNo != 0 &&
                    <a
                    className="BaseButton btn_prev BaseButton--skinGray size_default"
                    role={'button'}
                    onClick={() => {
                        setCommunityNo(prevNo)
                        navigate(`/community/view?cate=${view.cateNo}&no=${prevNo}`);
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up"
                        viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                    <span className="BaseButton_txt">이전글</span>
                </a>
                }
                { nextNo != 0 &&
                    <a
                    className="BaseButton btn_next BaseButton--skinGray size_default"
                    role={'button'}
                    onClick={() => {
                        setCommunityNo(nextNo)
                        navigate(`/community/view?cate=${view.cateNo}&no=${nextNo}`);
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                    <span className="BaseButton_txt">다음글</span>
                </a>
                }
                <a
                    className="BaseButton BaseButton--skinGray size_default"
                    onClick={() => {
                        navigate(listURL);
                    }}>
                    {/**/}
                    <span className={'BaseButton_txt'}>목록</span>
                </a>
            </div>
        </div>
    </>)
}


export default ArticleTopBtns;