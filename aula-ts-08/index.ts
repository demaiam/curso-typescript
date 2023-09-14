type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
};

type GameList = Array<Game>;

const game1: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation"
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14"
};

const games1: GameList = [game1];

function play(game: Game) {
  console.log(game);
}