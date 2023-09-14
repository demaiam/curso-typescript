import { connection } from "../configs/database-connection";
import { Game, CreateGame } from "../protocols/game-protocol";

async function getGames() {
  const result = await connection.query<Game[]>(`
    SELECT * FROM games;`
  );
}

async function createGame(game: Game) {
  await connection.query<Game[]>(`
    INSERT INTO games (title, platform)
    VALUES ($1, $2);`,
    [game.title, game.platform]
  );
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await connection.query<Game[]>(`
    SELECT * FROM games WHERE title=$1 AND platform=$2;`,
    [game.title, game.platform]
  );
  return result.rowCount;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;