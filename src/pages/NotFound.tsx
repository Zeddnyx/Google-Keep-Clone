import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-10">
      <h2>404 Not Found</h2>
      <p>'{pathname.replace("/", "")}' does not exist.</p>
      <button className="mt-10" onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
