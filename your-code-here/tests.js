// Test Runner: https://mochajs.org
// DOM helpers: https://testing-library.com/docs/intro
// Assertions: https://unexpected.js.org/assertions/any/to-be/

const { expect } = weknowhow;
const { screen, queryByTestId, fireEvent } = TestingLibraryDom;

beforeEach(function () {
  this.app = document.querySelector("#user-app");
});

it("Check if the component is rendering", function () {
  expect(screen.getByText("Movies Evan Likes!"), "to be truthy");
});

it("Movie title should be a link to rotten tomatoes", async function () {
  const link = await screen.findAllByRole("link");
  expect(link[0].href, "to contain", "www.rottentomatoes.com");
});

it("Movie item should contain a year in format YYYY", async function () {
  const item = await screen.findAllByRole("listitem");
  expect(item[0].textContent, "to match", /\(\d{4}\)/);
});

it("Movie item should contain a percent", async function () {
  const item = await screen.findAllByRole("listitem");
  expect(item[0].textContent, "to match", /\d{2}%/);
});

it("Should toggle the review", async function () {
  expect(await screen.queryByTestId("review-details"), "to be null");

  const item = await screen.findAllByRole("listitem");
  fireEvent.click(item[0]);

  expect(await screen.queryByTestId("review-details"), "to be truthy");
  fireEvent.click(item[0]);

  expect(await screen.queryByTestId("review-details"), "to be null");
});

it("Open review should contain an image", async function () {
  const item = await screen.findAllByRole("listitem");
  fireEvent.click(item[0]);

  const image = await screen.findAllByRole("img");
  expect(image, "to be truthy");
});
