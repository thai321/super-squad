import characters_json from '../data/characters.json';

export default function createCharacter(id) {
  return characters_json.find(character => character.id === id);
}
