import { MoviePage } from "@/pages-fsd";

const movie = {
  trailerUrl: "https://www.youtube.com/watch?v=c58b-xP_6qA&ab_channel=Yoby",
  title: "Невероятные приключения ДжоДжо",
  year: 2016,
  length: 140,
  ageRating: 18,
  country: "Япония",
  genres: ["Аниме", "Приключения"],
  rating: 10,
  actors: [
    {
      name: "Кира Йошикаге",
      photoUrl:
        "https://opis-cdn.tinkoffjournal.ru/i/YQXOO66bhIH_-Kb3JC8QYV2DzNrqfRS2eSPj1h0Je7E/h:600/w:600/Z3M6Ly9tZWRpYS1z/dG9yYWdlLXByb2R1/Y3Rpb24tdGovc29j/aWFsL3Byb2ZpbGUv/MDFkZTVkMjQuNTZi/MTE5ZDhfNDU4ZF80/ODVhXzlmZGFfZTM3/YTJkMjU2Mjc3XzM4/N2M2YzEwMzVhZTkx/YWFkYTFmYmVhMWQ5/YWRjYjg2LmpwZWc",
    },
    {
      name: "Куджо Джотаро",
      photoUrl:
        "https://staticg.sportskeeda.com/editor/2022/06/508cd-16557590423635-1920.jpg",
    },
    {
      name: "Джозеф Джостар",
      photoUrl:
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Joseph-Joestar.JoJo-s-Bizarre-Adventures.webp",
    },
    {
      name: "Джорно Джованна",
      photoUrl:
        "https://staticc.sportskeeda.com/editor/2023/05/c34aa-16831230583030-1920.jpg",
    },
  ],
  description:
    "Англия, конец XIX века. Богатый аристократ Джордж Джостар, верный некогда данному слову, принимает в семью осиротевшего бедного парня Дио и теперь относится к нему как к сыну. Родной же сын Джорджа Джонатан совсем не рад новому «брату», ведь тот превосходит его во всём, но вскоре благородство отца обернётся для него настоящей трагедией. Внимание Дио привлекает Каменная маска — семейная реликвия, украв которую он высвобождает древние силы, способные превратить его в неуязвимого вампира. На протяжении многих десятилетий против зла будут сражаться представители разных поколений семьи Джостар: Джонатан Джостар, Джозеф Джостар, Джотаро Куджо, Джоскэ Хигасиката, Джорно Джованна, Джолин Куджо.",
  reviews: [
    {
      name: "Джатаро Токийский",
      body: "Я мелочевкой не занимаюсь. Рыбу? Рыбу могу поглушить",
      date: "7 июля 2020",
    },
  ],
};

export default function moviePageForTest() {
  return (
    <>
      <main>
        <MoviePage
          trailerUrl={movie.trailerUrl}
          title={movie.title}
          year={movie.year}
          length={movie.length}
          ageRating={movie.ageRating}
          country={movie.country}
          genres={movie.genres}
          rating={movie.rating}
          actors={movie.actors}
          description={movie.description}
          reviews={movie.reviews}
        />
      </main>
    </>
  );
}
