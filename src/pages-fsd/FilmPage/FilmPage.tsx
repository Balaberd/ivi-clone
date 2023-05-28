import { FC } from "react";
import { useGetFilmQuery } from "@/entities/movie/model/movie.api";
import { Breadcrumbs, PersonSlider } from "@/widgets";
import { Player } from "@/entities";
import { useRouter } from "next/router";
import { ExpandedBlock } from "@/shared";
import styles from "./FilmPage.module.scss";
import { FilmDescription } from "./FilmDescription/FilmDescription";
import { ActionBlock } from "./ActionBlock/ActionBlock";

export const FilmPage: FC = () => {
  const { id } = useRouter().query;
  const { data } = useGetFilmQuery(id);

  if (data) {
    return (
      <div className={styles.filmPage}>
        <Breadcrumbs />

        <div className={styles.infoBlock}>
          <div className={styles.playerBlock}>
            <Player />
            <ActionBlock />
          </div>

          <FilmDescription
            className={styles.descriptionBlock}
            name={data.name}
            years={data.years}
            ageLimit={data.ageLimit}
            durations={data.durations}
            country={data.country}
            genre={data.genre}
            director={data.director}
            actors={data.actors}
            rating={data.rating}
            description={data.description}
            countRating={data.count_rating}
          />
        </div>

        <PersonSlider
          title="Астеры и создатели"
          isSlider={false}
          persons={[data.director, ...data.actors]}
        />

        <ExpandedBlock className={styles.plot} title="Сюжет">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, modi
            eum ducimus repellendus necessitatibus aut. Voluptatibus, incidunt!
            Exercitationem consectetur perspiciatis nulla, accusantium dolor
            corporis deleniti, iure recusandae, temporibus veniam tempora.
            Repellendus, earum optio quod delectus dicta nihil officia facilis
            ipsa laboriosam quidem suscipit doloribus eaque, totam veritatis
            repudiandae odit minus accusamus consequatur at voluptate aliquam
            rerum deleniti! Molestias, facere iste! Fuga aut ut, non recusandae
            ipsum vitae vel voluptatum dolore nostrum nisi neque sint in? Error
            ullam iste earum sit, odio voluptate, vel cum exercitationem sed
            voluptates aliquam nam! Eos. Accusamus a sunt dolores tempora hic
            molestiae quo sapiente voluptas illo, sit unde explicabo velit, quia
            temporibus consequuntur autem esse itaque beatae aspernatur, dolor
            officia incidunt doloribus pariatur.
          </p>
          <p>
            Molestias eius tempora amet accusamus doloribus nobis cum suscipit.
            Dicta facere ipsum, illo totam nam modi quam eaque, fugiat,
            explicabo perspiciatis asperiores quibusdam officia enim voluptatem
            beatae. Nihil, saepe dolor. Necessitatibus officia voluptatum cumque
            placeat animi consectetur, amet sit laborum dolor! A, aliquam cum
            debitis nemo corporis asperiores tempore, fugiat possimus libero
            maiores recusandae voluptatem distinctio inventore ullam esse est?
            Nam maxime sequi dolorem, vel quasi temporibus laborum adipisci
            officiis pariatur mollitia eligendi repellat modi rerum atque
            accusantium tenetur sint dolores!
          </p>
          <p>
            Accusantium assumenda vero modi omnis, numquam sit velit eligendi?
            Itaque similique, nostrum est ex sit, eligendi error, ab eum aperiam
            eius ipsa laudantium illum quaerat blanditiis quae alias nemo.
            Praesentium deleniti, officiis qui consectetur reiciendis
            repudiandae libero quia consequatur. Temporibus cupiditate cumque
            ab, eaque necessitatibus inventore reprehenderit veniam officiis
            velit facere, voluptates, ex perferendis recusandae. Praesentium,
            odit! Sapiente aspernatur minus iste? Delectus fugit consequuntur
            molestias minima iure recusandae similique! Ad corrupti fugiat
            perspiciatis? Voluptates tempore ex totam facere fugit, labore
            praesentium quibusdam excepturi aliquid dolor expedita earum
            commodi, voluptatem nulla atque sint quisquam ad mollitia obcaecati
            recusandae unde suscipit!
          </p>
          <p>
            Omnis, repellendus! Reiciendis commodi laudantium cupiditate
            consectetur doloremque tenetur ipsum! Inventore architecto
            reiciendis saepe! Eligendi minima ea maxime inventore facilis optio
            veniam rerum, voluptate, esse consectetur, consequuntur expedita
            vero id a delectus. Corporis error unde sequi eius delectus
            temporibus omnis, beatae nisi ullam odit similique id esse! Nesciunt
            sunt beatae nisi quisquam corporis non, cumque, doloribus ipsam
            minus molestiae unde iusto nulla!
          </p>
        </ExpandedBlock>
      </div>
    );
  }
  return null;
};
