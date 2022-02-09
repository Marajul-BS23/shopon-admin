import { useState } from "react";
import DeleteAdmin from "./deleteAdmin.service";

const TestComponent = (props) => {
    const [val, setVal] = useState(0);
    return (
        <>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <input
                    style={{ margin: "20px" }}
                    type="number"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                ></input>

                <br />
                <button
                    onClick={() => {
                        console.log(props);
                        props.location.state = 5;
                        props.history.push("/admin/himel/update", { data: val });
                    }}
                    style={{ margin: "20px" }}
                >
                    update user
                </button>
                <br />
                <button
                    onClick={() => {
                        DeleteAdmin(val);
                    }}
                    style={{ margin: "20px" }}
                >
                    Delete user
                </button>
            </div>
        </>
    );
};

export default TestComponent;
