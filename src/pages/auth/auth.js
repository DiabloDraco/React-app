import './auth.scss'
import Input from '../../components/input'
import back from './../../assets/images/back.png'
import { useRef, useState } from 'react'
import Modal from '../../components/modal'
import { useTranslation } from 'react-i18next'

function Auth() {
    let { t , i18n } = useTranslation()
    let [active, setActive] = useState(false)
    let [info, setInfo] = useState({})
    let form = useRef(null)
    let nameRef = useRef(null)
    let surnameRef = useRef(null)
    let phoneRef = useRef(null)
    let passwordRef = useRef(null)

    function Modalactive(e) {
        e.preventDefault()
        let info = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            password: passwordRef.current.value,
            phone: phoneRef.current.value
        }
        setInfo(info)
    }
    function handleLanguage(e) {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <>
            <div className='auth__container container'>
                <div className='auth__left'>
                    <div className='auth__header'>
                        <h1 className='auth__heading'>
                            {t("page")}
                        </h1>
                        <select onChange={handleLanguage} className='auth__select'>
                            <option value="uz">uz</option>
                            <option value="en">en</option>
                        </select>
                    </div>
                    <form onSubmit={Modalactive} ref={form} className='auth__form'>
                        <label className='auth__label'>
                            <h3 className='auth__label-name'>{t("name")}</h3>
                            <Input ref={nameRef} placeholder={t("name")} type="text" />
                        </label>
                        <label className='auth__label'>
                            <h3 className='auth__label-name'>{t("surname")}</h3>
                            <Input ref={surnameRef} placeholder={t("surname")} type="text" />
                        </label>
                        <label className='auth__label'>
                            <h3 className='auth__label-name'>{t("password")}</h3>
                            <Input ref={phoneRef} placeholder={t("password")} type="password" />
                        </label>
                        <label className='auth__label'>
                            <h3 className='auth__label-name'>{t("phone")}</h3>
                            <Input ref={passwordRef} placeholder={t("phone")} type="tel" />
                        </label>
                        <button onClick={() => { setActive(true) }} className='auth__submit'>{t("sign")}</button>
                    </form>
                </div>
                <div className='auth__right'>
                    <img className='auth__right-img' src={back} alt="background" />
                </div>
            </div>
            <Modal
                inf={info}
                modal={active}
                setModal={setActive}
            />
        </>
    )
}

export default Auth