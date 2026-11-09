import "./App.css";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import appstore from "./Util/appstore.js";

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
