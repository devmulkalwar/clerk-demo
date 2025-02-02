import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Clerk Publishable Key");
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey="pk_test_YmV0dGVyLW1hcm1vc2V0LTk5LmNsZXJrLmFjY291bnRzLmRldiQ">
      <App />
    </ClerkProvider>
  </StrictMode>
);
