import {  render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";
// import Header from "./Header";
// import EmojiResultsRow from "./EmojiResultRow";



describe("All tests", () => {


  beforeEach(() => {
    render(<App />);   
  
    
  });

  test("Header must be rendered successfully", () => {
    const header = screen.getByText("Emoji Search");

    expect(header).toBeInTheDocument();
  });

  test("uses correct src", () => {
    const image = screen.getAllByAltText(/header.*? post/i);
    expect(image).toBeTruthy();
  });

  test('The emoji must be equal 20',() => {    
    const emojis = screen.getAllByText('Click to copy emoji')
    expect(emojis.length).toEqual(20);
})

test('The emojis which was entered in the search bar must been correctly rendered' ,() => {
  const input = screen.getByPlaceholderText("Search emoji");
  
  const emojiName = '1234';
  userEvent.type(input, emojiName);
  expect(screen.getByText(emojiName)).toBeInTheDocument();
})

  
});
