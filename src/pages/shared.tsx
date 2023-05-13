import { Medallion, Person, Trailer } from "@/shared";
import classes from "./shared.module.scss"; // для центрирования

// ДЛЯ ДЕМОНСТРАЦИИ И ТОЛЬКО //

export default function Shared() {
  return (
    <>
      <div className={classes.center}>
        {/* MEDALLION */}
        <div
          style={{
            padding: "1rem 1rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "40rem",
          }}
        >
          <h1 style={{ fontSize: "22px", color: "black" }}>Medallion</h1>
          {/* не обращайте внимание на эту ошибку, она и не ошибка вовсе */}
          {/* 
        это происходит из того, что я решил, что делать medallion для
        рейтинга и для актера отдельно будет бессмысленно, и сделал через
        логические операторы, но Image некста требует, чтобы src был точно указан
        и поэтому прописать в интерфейсе url?:string не получится, нужно писать url:string
        а так я бы сделал url как возможный пропс, и этой ошибки не было бы
        нужно это обсудить и решить, делить ли компонент на двое.
        Если прокинуть пустой url, то ошибка исчезает
        */}
          <Medallion rating={"7,3"} photoUrl="" />
          <Medallion
            photoUrl={
              "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85"
            }
            name={"Вигго Мортенсен"}
          />
        </div>
        {/* PERSON */}
        <div
          style={{
            padding: "1rem 1rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "40rem",
          }}
        >
          <h1 style={{ fontSize: "22px", color: "black" }}>Person</h1>
          <Person
            photoUrl={
              "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85"
            }
            name={"Вигго Мортенсен"}
            role={"Актёр"}
          />
        </div>
        {/* TRAILER */}
        <div
          style={{
            padding: "1rem 1rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "40rem",
          }}
        >
          <h1 style={{ fontSize: "22px", color: "black" }}>Trailer</h1>
          <Trailer
            src={
              "https://media.tenor.com/ETlOjJ8aU7EAAAAC/za-warudo-jojo-bizarre-adventure.gif"
            }
          />
        </div>
      </div>
    </>
  );
}
