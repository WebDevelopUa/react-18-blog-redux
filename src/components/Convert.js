import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {googleTranslateApiKey} from "../config";
import ErrorMessage from "./ErrorMessage";

const Convert = ({language, text}) => {

    const [message, setMessage] = useState({});
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // 1) invoke on props text changes (with timeout and cancel timeout ~ 2sec)
    useEffect(
        () => {
            const timerId = setTimeout(
                () => {
                    setDebouncedText(text);
                }, 2000);

            // Cleanup timer
            return () => {
                clearTimeout(timerId);
            }

        }, [text]
    )

    // 2) - invoke on state debouncedText and props language changes
    useEffect(
        () => {
            console.log(`New language: ${language.value} + debouncedText: ${debouncedText}`);

            debouncedText && axios.post('https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: googleTranslateApiKey,
                    }
                },
            )
                .then(r => {
                    console.log(r);
                    setTranslated(r.data.data.transitions[0].translatedText);
                })
                .catch(error => {
                    console.log(error);
                    setMessage(error);
                });


        }, [language, debouncedText]
    );


    return (
        <Fragment>

            <h3 className="ui header">Translation:</h3>

            <div className={`ui message ${text ? 'blue' : 'orange'}`}>
                {text ? text : 'Please, enter text to translate'}
            </div>

            <div className={`ui message ${translated ? 'green' : 'hidden'}`}>
                {translated && translated}
            </div>

            <ErrorMessage error={message}>
                {(message.code === "ERR_NETWORK") && 'Please Check Your Internet Connection.'}
            </ErrorMessage>

        </Fragment>
    )
}

export default Convert
