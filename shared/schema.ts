import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Portfolio data tables
export const portfolioProfiles = pgTable("portfolio_profiles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address"),
  summary: text("summary"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const publications = pgTable("publications", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  year: text("year").notNull(),
  type: text("type").notNull(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  reference: text("reference"),
  status: text("status").notNull().default("published"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const educations = pgTable("educations", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  period: text("period").notNull(),
  status: text("status").notNull(),
  gpa: text("gpa"),
  advisor: text("advisor"),
  coAdvisor: text("co_advisor"),
  thesis: text("thesis"),
  project: text("project"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  period: text("period").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const researchInterests = pgTable("research_interests", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  title: text("title").notNull(),
  description: text("description"),
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const presentations = pgTable("presentations", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  title: text("title").notNull(),
  venue: text("venue").notNull(),
  date: text("date").notNull(),
  type: text("type").notNull(),
  presentation: text("presentation"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  category: text("category").notNull(), // programming, software, research
  name: text("name").notNull(),
  level: integer("level"), // for programming skills
  createdAt: timestamp("created_at").defaultNow(),
});

export const awards = pgTable("awards", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => portfolioProfiles.id),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  period: text("period").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const portfolioProfilesRelations = relations(portfolioProfiles, ({ many }) => ({
  publications: many(publications),
  educations: many(educations),
  experiences: many(experiences),
  researchInterests: many(researchInterests),
  presentations: many(presentations),
  skills: many(skills),
  awards: many(awards),
}));

export const publicationsRelations = relations(publications, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [publications.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const educationsRelations = relations(educations, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [educations.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const experiencesRelations = relations(experiences, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [experiences.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const researchInterestsRelations = relations(researchInterests, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [researchInterests.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const presentationsRelations = relations(presentations, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [presentations.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const skillsRelations = relations(skills, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [skills.profileId],
    references: [portfolioProfiles.id],
  }),
}));

export const awardsRelations = relations(awards, ({ one }) => ({
  profile: one(portfolioProfiles, {
    fields: [awards.profileId],
    references: [portfolioProfiles.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPortfolioProfileSchema = createInsertSchema(portfolioProfiles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPublicationSchema = createInsertSchema(publications).omit({
  id: true,
  createdAt: true,
});

export const insertEducationSchema = createInsertSchema(educations).omit({
  id: true,
  createdAt: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
  createdAt: true,
});

export const insertResearchInterestSchema = createInsertSchema(researchInterests).omit({
  id: true,
  createdAt: true,
});

export const insertPresentationSchema = createInsertSchema(presentations).omit({
  id: true,
  createdAt: true,
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
  createdAt: true,
});

export const insertAwardSchema = createInsertSchema(awards).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPortfolioProfile = z.infer<typeof insertPortfolioProfileSchema>;
export type PortfolioProfile = typeof portfolioProfiles.$inferSelect;

export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type Publication = typeof publications.$inferSelect;

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof educations.$inferSelect;

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;

export type InsertResearchInterest = z.infer<typeof insertResearchInterestSchema>;
export type ResearchInterest = typeof researchInterests.$inferSelect;

export type InsertPresentation = z.infer<typeof insertPresentationSchema>;
export type Presentation = typeof presentations.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

export type InsertAward = z.infer<typeof insertAwardSchema>;
export type Award = typeof awards.$inferSelect;
