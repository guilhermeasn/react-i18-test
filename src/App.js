import { Translation } from './language';

function App() {

    return <>
    
        <h1><Translation namespace='home' message='title' /></h1>
        <p><Translation namespace='home' message='body' /></p>

    </>;

}

export default App;
