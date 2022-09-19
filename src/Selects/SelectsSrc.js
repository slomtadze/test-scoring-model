export const fieldArray = ["სოფლის მეურნეობა", "ვაჭრობა"];

export const subFieldArray = {
  "სოფლის მეურნეობა": [
    "ერთწლიანი კულტურები",
    "მრავალწლიანი კულტურები",
    "ციტრუსი",
  ],
  "ვაჭრობა ": ["კვების პროდუქტებით ვაჭრობა", "სათამაშოებით ვაჭრობა"],
};

export const sectorArray = {
  "ერთწლიანი კულტურები": [
    {
      name: "სიმინდი",
      minProfit: 100,
      maxProfit: 200,
      exp: 10,
      questions: [
        { q: "ჰექტარი", value: "", id: 1 },
        { q: "მოსავლიანობა", value: "", id: 2 },
        { q: "ფასი", value: "", id: 3 },
      ],
    },
    {
      name: "ხორბალი",
      minProfit: 150,
      maxProfit: 250,
      exp: 20,
      questions: [
        { q: "ჰექტარი", value: "" },
        { q: "მოსავლიანობა", value: "" },
        { q: "ფასი", value: "" },
        { q: "სხვა ხორბალი", value: "" },
      ],
    },
    {
      name: "ქერი",
      minProfit: 200,
      maxProfit: 300,
      exp: 30,
      questions: [
        { q: "ჰექტარი" },
        { q: "მოსავლიანობა" },
        { q: "ფასი" },
        { q: "სხვა ქერი" },
      ],
    },
  ],
  "მრავალწლიანი კულტურები": [
    {
      name: "ბალი",
      minProfit: 300,
      maxProfit: 400,
      exp: 40,
      questions: [{ q: "ჰექტარი" }, { q: "მოსავლიანობა" }, { q: "ფასი" }],
    },
    {
      name: "თხილი",
      minProfit: 350,
      maxProfit: 450,
      exp: 60,
      questions: [{ q: "ჰექტარი" }, { q: "მოსავლიანობა" }, { q: "ფასი" }],
    },
    {
      name: "ატამი",
      minProfit: 400,
      maxProfit: 500,
      exp: 70,
      questions: [{ q: "ჰექტარი" }, { q: "მოსავლიანობა" }, { q: "ფასი" }],
    },
  ],
  ციტრუსი: [
    {
      name: "მანდარინი",
      minProfit: 600,
      maxProfit: 700,
      exp: 80,
      questions: [{ q: "ჰექტარი" }, { q: "მოსავლიანობა" }, { q: "ფასი" }],
    },
  ],
};
