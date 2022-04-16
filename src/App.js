import {
    useState,
    useEffect
} from 'react';

import {
    Translation,
    changeLanguage,
    currentLanguage,
    availableLanguages
 } from './language';

function App() {

    const [ lang, setLang ] = useState(null);

    useEffect(() => {
        if(!lang) setLang(currentLanguage())
        else if(lang !== currentLanguage()) changeLanguage(lang);
    }, [lang]);

    return <>
    
        <h1><Translation namespace='home' message='title' /></h1>
        <p><Translation namespace='home' message='body' /></p>

        <form>
            <select value={ lang } onChange={ select => setLang(select.target.value) }>
                {
                    availableLanguages.map((lang, index) => (
                        <option key={ index } value={ lang.code }>
                            { lang.description }
                        </option>
                    ))
                }
            </select>
        </form>

    </>;

}

export default App;
