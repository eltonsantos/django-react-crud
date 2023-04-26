import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ background: "black", cursor: "pointer" }}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
