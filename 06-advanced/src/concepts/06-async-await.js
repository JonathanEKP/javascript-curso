import { heroes } from "../data/hero";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb",
    id2 = "5d86371f97c29d020f1e1f6d";

  try {
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);
    element.innerHTML = `${hero1.name}/ ${hero2.name}`;
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHero = async (id) => {
  const heroe = heroes.find((hero) => hero.id === id);
  if (!heroe) throw `Hero not found`;
  return heroe;
};
