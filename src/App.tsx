import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https:/github.com/felipems1.png",
      name: "Felipe Moises",
      role: "Desenvolvedor Front End",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-01 14:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https:/github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-05-31 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
