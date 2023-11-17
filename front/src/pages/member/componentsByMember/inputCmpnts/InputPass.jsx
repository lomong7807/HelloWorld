// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faLock} from "@fortawesome/free-solid-svg-icons";
import {changeDTO} from "../../../../store/changeDTO";

function InputField({setInputValue}) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faLock} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='비밀번호 입력'
                    type='password'
                    name='pass'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'pass', e.target.value);
                    }}
                />
            </InputGroup>
        </>
    );
}

export default InputField;
