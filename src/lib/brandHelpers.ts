import Brand from "@/models/Brand";

export const DEFAULT_BRANDS = [
  {
    name: "Asian Paints",
    tagline: "Royale Luxury Emulsion, Apcolite & Apex",
    logoUrl: "",
    accentColor: "#DC2626",
    popularSeries: "Royale Luxury Emulsion",
  },
  {
    name: "Birla Opus",
    tagline: "Superior Sheen & Luxury Finishes",
    logoUrl: "",
    accentColor: "#1D4ED8",
    popularSeries: "Opus Calista & Style",
  },
] as const;

export async function ensureDefaultBrands() {
  try {
    // Clean up any legacy or deleted brands (Berger, Dulux, Nerolac, JSW, Indigo)
    await Brand.deleteMany({
      normalizedName: { $nin: ["asian paints", "birla opus"] },
    });

    for (const item of DEFAULT_BRANDS) {
      const normalizedName = item.name.trim().toLocaleLowerCase("en");

      await Brand.updateOne(
        { normalizedName },
        {
          $setOnInsert: {
            ...item,
            normalizedName,
          },
        },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error("ensureDefaultBrands error:", error);
  }
}
