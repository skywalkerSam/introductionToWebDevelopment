"use client";

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createNote, setCreateNote] = useState(false);

  const router = useRouter();

  const create = async () => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <div>
      {createNote ? (
        <form onSubmit={create}>
          <h3>New note</h3>
          <input
            className="bg-slate-600"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-slate-600"
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              setCreateNote(false);
            }}
          >
            Done
          </button>
        </form>
      ) : (
        <button
          type="button"
          className="text-3xl float-end m-6"
          onClick={() => {
            setCreateNote(true);
          }}
        >
          +
        </button>
      )}
    </div>
  );
}
