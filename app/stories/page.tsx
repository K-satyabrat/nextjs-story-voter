import { StoriesList } from "./StoriesList";
import { stories } from "../stories";

export default function StoriesPage() {
  return (
    <main>
      <h1>Stories</h1>
      <StoriesList stories={stories} />
    </main>
  );
}
