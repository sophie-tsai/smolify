import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateCode } from "../../utils/redux/statusCodes";

function AccountComp(props) {
  const ref = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const { username, userId } = useSelector((state) => state.user);
  const statusCode = useSelector((state) => state.statusCodes.update);

  const dispatch = useDispatch();
  const { editMode, usernameInput, setUsernameInput, label, value } = props;

  const handleChange = (event) => {
    if (statusMessage) setStatusMessage("");
    if (statusCode !== 0) {
      dispatch(setUpdateCode(0));
    }
    const { value } = event.target;
    setUsernameInput(value);
  };

  useEffect(() => {
    if (editMode && label === "username") ref.current.focus();
  }, [editMode]);

  return (
    <div className="inside-box">
      <p className="account-label">{label}</p>
      {editMode && label === "username" ? (
        <input
          ref={ref}
          type="text"
          className="account-subcomponent-child-input"
          onChange={handleChange}
          value={usernameInput}
          size="4"
        />
      ) : (
        <p className="account-value">{value}</p>
      )}
    </div>
  );
}

export default AccountComp;
