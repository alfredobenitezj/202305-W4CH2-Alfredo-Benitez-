import { SyntheticEvent } from "react";
import { AddTask2 } from "../models/Task2";
import { Task } from "../models/Task2";
import { TaskStructure } from "../models/taskStructurepersonal";

export function AddTask() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const task = new Task(
      (form.elements.namedItem("title") as HTMLInputElement).value,
      (form.elements.namedItem("owner") as HTMLInputElement).value
    );
    console.log(task);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={Name}>Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor={LastName}>LastName</label>
        <input type="text" name="lasname" id="lastname" required />
      </div>
      <div>
        <label htmlFor={Birthday}>Birthday</label>
        <input type="text" name="birthday" id="Birthday" required />
      </div>{" "}
      <div>
        <label htmlFor={Gender}>gender</label>
        <input type="radio" name="male" id="gendermale" />
        <label name="male"for="Male"></label>
        <input type="radio" name="female" id="genderfemale" />
        <label name="Female"for 
      </div>
      <div>
        <label htmlFor={Email}>Email</label>
        <input type="text" name="title" id="title" required />
      </div>{" "}
      <div>
        <label htmlFor={Newsletter}>Name</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label htmlFor="owner">Responsable</label>
        <input type="text" name="owner" id="owner" />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
