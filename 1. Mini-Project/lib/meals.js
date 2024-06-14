import sql from "better-sqlite3";
import { revalidatePath } from "next/cache";
import slugify from "slugify";
import xss from "xss";

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => { setTimeout(() => { resolve() }, 5000) });
  // throw new Error("Failed to load Meals");
  revalidatePath("/meals");
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function saveMeal(meal) {
  await new Promise((resolve) => { setTimeout(() => { resolve() }, 5000) });
  meal.slug = slugify(meal.title, { lower: true }); //if title same next it five error for same slug
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  meal.image = fileName;

  db.prepare(
    `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}
