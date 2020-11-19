cube(`Orders`, {
  sql: `
SELECT
  "origin_airport",
  "destination_airport",
  "origin_city",
  "destination_city",
  "passengers",
  "seats",
  "flights",
  "distance",
  "fly_month",
  "origin_pop",
  "destination_pop",
  "id"
FROM
  "splitgraph/domestic_us_flights:latest"."flights"
  `,

  measures: {
    count: {
      type: `count`
    },

    totalAmount: {
      sql: `amount`,
      type: `sum`
    }
  },

  dimensions: {
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
