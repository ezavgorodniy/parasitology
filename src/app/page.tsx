import type { JSX } from "react";
import { ParasiteExplorer } from "@/components/ParasiteExplorer";

export default function HomePage(): JSX.Element {
  return (
    <>
      <h1>Паразити котів і собак за системами органів</h1>
      <p className="muted">
        Оберіть тварину та систему органів, щоб побачити перелік паразитів, які можуть у ній
        жити.
      </p>
      <ParasiteExplorer />
    </>
  );
}
