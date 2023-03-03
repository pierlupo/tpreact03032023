import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError() 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh", width:"100vw"}}>
      <h1>Error {error.status}!</h1>
      <img src="https://static3.depositphotos.com/1002881/151/i/600/depositphotos_1519030-stock-photo-error-404.jpg" alt="erreur 404" style={{height:"50vh", width:"50vw"}} />
      {/* <p>{error.data}</p> */}
    </div>
  )
}

export default ErrorPage