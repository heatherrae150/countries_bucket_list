use countries_bucket_list

db.dropDatabase();

db.countries.insert([
  {
    country_name: "Spain",
    population: 50000000
  },
  {
    country_name: "UK",
    population: 65000000
  }
]);

db.countries.find()
