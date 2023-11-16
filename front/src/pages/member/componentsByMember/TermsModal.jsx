import React, {useState} from "react";
import SubmitButton from "./buttonCmpnts/SubmitButton";
import {Button} from "reactstrap";

function TermsModal({isOpenModal, onClickAgreeButton, terms}) {
    let modalTerms = terms.map((userTerms)=>(userTerms.terms)).join('\n');

    if(!isOpenModal)return null;
    return (
        <>
            <div
                style={{
                display: 'flex',
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.5)"
            }}>
                <div style={{
                    backgroundColor: "white",
                    width: "80%",
                    maxWidth: "800px",
                    height: "60%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <textarea style={{
                        width: "90%",
                        maxWidth: "800px",
                        height: "70%",
                        position: "absolute",
                        top: "42%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        {modalTerms}
                    </textarea>

                    <Button color="default"
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "15px",
                                width: "30%",
                                transform: "translate(-50%, -50%)"}}
                            onClick={onClickAgreeButton}
                    >
                        동의합니다.
                    </Button>
                </div>

            </div>
        </>
    );
}

export default TermsModal;
