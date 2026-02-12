import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const flowers = pgTable('flowers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  nameEn: text('name_en'),
  scientificName: text('scientific_name'),
  slug: text('slug').unique().notNull(),
  meaning: text('meaning').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  category: text('category'),
  color: text('color'),
  season: text('season').array(),
  occasions: text('occasions').array(),
  isPopular: boolean('is_popular').default(false),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

export type Flower = typeof flowers.$inferSelect;
export type NewFlower = typeof flowers.$inferInsert;
