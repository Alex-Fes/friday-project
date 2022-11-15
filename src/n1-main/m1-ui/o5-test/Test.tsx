import React, {useState} from 'react';
import styles from "../common/styles/container.module.scss";
import SuperButton from "../common/Button/Button";
import SuperInputText from "../common/Input/Input";
import SuperCheckbox from "../common/Checkbox/Checkbox";


const Test = () => {

    const forButtonCallback = () => {
        alert("forButtonCallback is work")
    }
    const onChangeInputText = (value: string) => {
        alert(value)
    }
    const [checked, setChecked] = useState(false)
    return (
        <div className={styles.container}>
            <SuperInputText onChangeText={onChangeInputText}/>
            <SuperButton red={false} onClick={forButtonCallback}>
                Test button
            </SuperButton>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}>
                choose
            </SuperCheckbox>
        </div>
    )
}

export default Test;