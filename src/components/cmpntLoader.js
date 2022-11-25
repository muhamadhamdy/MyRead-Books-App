import React, {useEffect} from 'react';


export const MyLoader = (props) => {
    const {loadingText, cssClass = '', countTo = 60, showTimer = false, strokeColor} = props;
    const [counter, setCounter] = React.useState(0);
    const pad = ( value ) => {
        const prefix = "00:";
        const formatted = value > 9 ? value : "0" + value;
        return prefix + formatted;
    }
    useEffect(() => {
        const timer =
            showTimer && counter < countTo && setInterval(() => setCounter(counter + 1), 1000);
        return () => clearInterval(timer);
    }, [counter, showTimer, countTo]);
    return (
        <div className={`myLoader ${cssClass}`}><span className="myLoader__inner"><span className="myLoader__text">{loadingText}</span><span className={'smallSpinner'}>
               <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" style={{stroke: strokeColor}}></circle>
               </svg>
            </span></span>
            { counter > 1 && <span className={'myLoader__counter'}><br/>{pad(counter)}</span> }
        </div>
    );
}