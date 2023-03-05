import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { signIn, signUp } from "../auth/authSlice";

const SignForm = () => {
  //const{credentials} = useParams()
  // const contact = useSelector(state => state.contacts.contacts).find(c => c.id === contactId)
  const user = useSelector((state) => state.auth.user);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(mode);
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const credentials = {
      email,
      password,
      returnSecureToken: true,
    };
    emailRef.current.value = "";
    passwordRef.current.value = "";

    if (mode === "Connexion") {
      await dispatch(signIn(credentials));
      
    } else if (mode === "Inscription") {
      await dispatch(signUp(credentials));
    }
  };

  useEffect(() => {
    if (user) {
      if(mode ==="Connexion"){
      navigate("/");}
    }
  }, [user, mode, navigate]);

  return (
    <>
      <div className="col-3 offset-4 bg-dark rounded p-3 mt-2">
        <form onSubmit={submitFormHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              required
              ref={emailRef}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              required
              ref={passwordRef}
              className="form-control"
            />
          </div>
          <div className="text-end">
            {/* <button className={`btn btn-${mode === 'Sign In' ? 'primary' : 'secondary'}`}>{mode}</button> */}
            <button
              className={`btn btn-${mode === "Inscription" ? "primary" : "secondary"}`}
            >
              {mode}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignForm;
