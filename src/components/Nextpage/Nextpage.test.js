import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Nextpage from "./Nextpage";

test("sentence input value should change ", () => {
  render(<Nextpage />);
  const inputElement = screen.getByText(
    /Congrats, You have qualified for the next round!!!/i
  );
  expect(inputElement).toBeInTheDocument();
});
