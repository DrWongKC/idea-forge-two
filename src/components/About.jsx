import { observer } from "mobx-react-lite";
function About({ store }) {    // RECEIVES STORE FROM APP FILE
    return (
        <div className="App">
            <h1>About - {store.userInfo.name}</h1>
        </div>
    );
}
export default observer(About);