// Test Runner: https://mochajs.org
// DOM helpers: https://testing-library.com/docs/intro
// Assertions: https://unexpected.js.org/assertions/any/to-be/

const { expect } = weknowhow;
const { screen, waitFor } = TestingLibraryDom;
import { useMovies } from "./hooks/useMovies.js";

beforeEach(function () {
  this.app = document.querySelector("#user-app");
});

it("Check if the component is rendering", function () {
  expect(screen.getByText("Movies Evan Likes!"), "to be truthy");
});

it("Check if the movie list is rendering", async function () {
  const movieItems = await screen.findAllByRole("listitem");
  expect(movieItems, "to have length", 29);
});

it("Movie title should open rotten tomatoes", async function () {
  const link = await screen.findAllByRole("link");
  expect(link[0].href, "to contain", "www.rottentomatoes.com");
});

it("Movie item should contain a year in format YYYY", async function () {
  const links = await screen.findAllByRole("listitem");
  expect(links[0].textContent, "to match", /\(\d{4}\)/);
});

it("Movie item should contain a percent", async function () {
  const links = await screen.findAllByRole("listitem");
  expect(links[0].textContent, "to match", /\d{2}%/);
});
