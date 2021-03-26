import React from "react";

function DeleteAccount(props) {
  return props.triggerDelete ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Delete My Account</h1>
        <p> Are you sure you want to delete your account at TeamUP?</p>
        <button
          onClick={() => {
            props.setTriggerDelete(false);
            props.setTrigger(true);
          }}
        >
          No
        </button>
        <button> Yes </button>
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerDelete(false);
            props.setTrigger(true);
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DeleteAccount;