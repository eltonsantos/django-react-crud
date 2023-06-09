import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-9 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400 mt-3">{task.description}</p>
      <hr />
    </div>
  );
}
