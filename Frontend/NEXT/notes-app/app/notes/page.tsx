// import PocketBase from 'pocketbase';
import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="font-semibold text-3xl m-3 text-gray-400">Notes...</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content } = note || {}; //created

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className="m-3 text-gray-500">{title}</h2>
        <h5 className="m-3 text-gray-400">{content}</h5>
        {/* <p>{created}</p> */}
      </div>
    </Link>
  );
}
