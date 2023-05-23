import { AddTask } from "../models/Task";
import { AddTask2 } from "../models/Task2";

export default function ToDo() {
  return (
    <section>
      <h2>ToDo List</h2>
      <AddTask></AddTask>
      <br />
      <AddTask2></AddTask2>
    </section>
  );
}
