import { fireEvent, render } from "@testing-library/react"
import BasicTextFields from "../Components/Common/Form";
import { BrowserRouter } from "react-router-dom";


describe("account login or signup form", () => {
  it("renders default state", () => {
    const { getByTestId } = render(<BasicTextFields />);

    const email = getByTestId("account-enter-email");
    const password = getByTestId("account-enter-password");

    expect(email.value).toBe("");
    expect(password.value).toBe("");
  })
  it("keeps the submit button disabled if textareas are empty", () => {
    const { getByTestId } = render(<BasicTextFields />);

    const email = getByTestId("account-enter-email");
    const password = getByTestId("account-enter-password");

    fireEvent.change(email, { target: { value: "email" } });
    fireEvent.change(password, { target: { value: "password" } });
    
    expect(email).toHaveClass('MuiFormLabel-filled')
    expect(password).toHaveClass('MuiFormLabel-filled')
  })
})