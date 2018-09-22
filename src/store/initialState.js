export default {
  lessons: [
    {
      lessonId: 1,
      name: "name",
      description: "little description",
      concepts: [
        {
          conceptId: 1,
          cardA: {
            cardId: 1,
            text: "büro",
            media: {
              type: "IMAGE",
              source:
                "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
          },
          cardB: {
            cardId: 2,
            text: "office"
          }
        },
        {
          conceptId: 2,
          cardA: {
            cardId: 3,
            text: "kino",
            audio:
              "http://packs.shtooka.net/deu-balm-alexandra/ogg/deu-7d557361.ogg"
          },
          cardB: {
            cardId: 4,
            text: "cinema"
          }
        }
      ]
    },
    {
      lessonId: 2,
      name: "other name",
      description: "little description",
      concepts: [
        {
          conceptId: 1,
          cardA: {
            cardId: 3,
            text: "flughafen"
          },
          cardB: {
            cardId: 4,
            text: "airport"
          }
        }
      ]
    }
  ]
};
