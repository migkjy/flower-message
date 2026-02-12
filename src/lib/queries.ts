import { db } from './db';
import { flowers, type Flower } from './schema';
import { eq, ilike, or, sql } from 'drizzle-orm';

export async function getAllFlowers(): Promise<Flower[]> {
  return db.select().from(flowers).orderBy(sql`${flowers.isPopular} DESC NULLS LAST`, flowers.name);
}

export async function getFlowerBySlug(slug: string): Promise<Flower | undefined> {
  const result = await db.select().from(flowers).where(eq(flowers.slug, slug)).limit(1);
  return result[0];
}

export async function getFlowersByCategory(category: string): Promise<Flower[]> {
  return db.select().from(flowers).where(eq(flowers.category, category)).orderBy(flowers.name);
}

export async function getPopularFlowers(): Promise<Flower[]> {
  return db.select().from(flowers).where(eq(flowers.isPopular, true)).orderBy(flowers.name);
}

export async function searchFlowers(query: string): Promise<Flower[]> {
  const pattern = `%${query}%`;
  return db
    .select()
    .from(flowers)
    .where(
      or(
        ilike(flowers.name, pattern),
        ilike(flowers.nameEn, pattern),
        ilike(flowers.meaning, pattern),
      ),
    )
    .orderBy(flowers.name)
    .limit(50);
}

export async function getFlowerCategories(): Promise<string[]> {
  const result = await db
    .selectDistinct({ category: flowers.category })
    .from(flowers)
    .where(sql`${flowers.category} IS NOT NULL`)
    .orderBy(flowers.category);
  return result.map((r) => r.category!);
}

export async function getAllFlowerSlugs(): Promise<string[]> {
  const result = await db.select({ slug: flowers.slug }).from(flowers);
  return result.map((r) => r.slug);
}
