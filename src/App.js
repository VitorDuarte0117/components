import "./App.css";
import faker from "@faker-js/faker";

import Post from "./components/Post";
import Approval from "./components/ApprovalCard";

function App() {
    const now = new Date().toISOString().slice(0, 10);
    return (
        <div className="ui container comments">
            <Approval>
                <Post
                    author="Sam"
                    date={now}
                    comment="Hell yeah 1"
                    src={faker.image.avatar()}
                />
            </Approval>
            <Approval>
                <Post
                    author="Alex"
                    date={now}
                    comment="Hell yeah 2"
                    src={faker.image.avatar()}
                />
            </Approval>
            <Approval>
                <Post
                    author="Bob"
                    date={now}
                    comment="Lorem"
                    src={faker.image.avatar()}
                />
            </Approval>
        </div>
    );
}

export default App;
