import "./toast.css";
const Toast = () => {
  return (
    <div className="toastBar">
      <div className="toastMsg">Successfully signed in!!</div>
      <div className="toastClose">x</div>
    </div>
  );
};

export default Toast;
