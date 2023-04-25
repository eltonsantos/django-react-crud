import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createTask(data);
    console.log(res);
    navigate("/tasks");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Description is required</span>}

        <button>Save</button>
      </form>
    </div>
  );
}
