import { FC } from "react";
import { useGetPersonQuery } from "@/entities/person/model/person.api";
import { ExpandedBlock, plural } from "@/shared";
import { PersonSlider } from "@/widgets";
import { useRouter } from "next/router";
import { IPerson } from "@/entities/person/model/person.types";
import styles from "./PersonPage.module.scss";
import { TitleBlock } from "./TitleBlock/TitleBlock";
import { PersonMovieList } from "./MoviesList/PersonMovieList";
import { POPULAR_PERSON_MOCK } from "./MOCK/POPULAR_PERSON_MOCK";

export const PersonPage: FC = () => {
  const { id } = useRouter().query;
  const personData: IPerson = useGetPersonQuery(id).data;

  if (!personData) {
    return null;
  }

  const personMoviesDirector = personData.movies;
  const personMoviesActor = personData.person.movies;

  const moviesCount = personMoviesDirector.length + personMoviesActor.length;

  return (
    <div className={styles.personPage}>
      <div className={styles.container}>
        <TitleBlock
          description={personData.person.description}
          avatar={personData.person.avatar}
          name={personData.person.full_name}
          nameEng={personData.person.full_name_EN}
        />

        <a href="#movieListAnchor" className={styles.filmCount}>
          {`${moviesCount} ${plural(moviesCount, {
            one: "фильм",
            few: "фильма",
            many: "фильмов",
          })}`}
        </a>

        <PersonMovieList
          moviesByDirector={personMoviesDirector}
          moviesByActor={personMoviesActor}
        />

        <ExpandedBlock title="Биография">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            facilis, asperiores beatae suscipit sit excepturi assumenda veniam
            tempora illum quas ducimus distinctio sunt labore est cumque non
            nulla. Placeat, provident. Sunt animi exercitationem iure pariatur
            ab sequi. Repudiandae modi iste minima vero enim quidem architecto
            ipsum molestiae accusantium fugit, omnis, non laboriosam dolorum
            maiores praesentium fuga repellat, numquam voluptatibus rem!
          </p>
          <p>
            Obcaecati sunt, quisquam assumenda mollitia iusto, aliquam aperiam
            dolores corporis soluta expedita, pariatur explicabo velit beatae
            error exercitationem nulla! Atque ipsam, provident voluptatum porro
            dignissimos tempore adipisci aliquam quos alias? Quidem dolore
            provident quasi saepe error nostrum vitae eos nulla rem cumque
            sequi, excepturi voluptatem consectetur quod aliquam eveniet dolorum
            est ipsa soluta. Nemo iure quos distinctio, illum sapiente
            molestiae! Libero deserunt ipsum possimus, facilis necessitatibus,
            nam cum voluptatem sunt veniam laudantium dolore illum aperiam. Et
            natus commodi aspernatur illo asperiores esse sit? Maxime dolore
            ducimus assumenda sed eum accusamus.
          </p>
        </ExpandedBlock>

        <PersonSlider
          title="Популярные персоны"
          persons={POPULAR_PERSON_MOCK}
        />
      </div>
    </div>
  );
};
