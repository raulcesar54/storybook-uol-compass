import { styled } from "@stitches/react";

export const Text = styled("input", {
  backgroundColor: "#F6F8FA",
  border: "none",
  padding: 8,
  borderRadius: 4,
  "&::placeholder": {
    fontFamily: "Inter",
    fontSize: 11,
  },
  "&:focus": {
    outlineColor: "#4425FF",
    background: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  "&:hover": {
    backgroundColor: "#C9CED3",
  },
  "&:disabled": {
    opacity: 0.4,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  variants: {
    error: {
      true: {
        border: "3px solid #FF2525",
        "&:focus": {
          outlineWidth: 0,
          background: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});
export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 4,
});
export const ErrorText = styled("small", {
  fontFamily: "Inter",
  color: "#FF2525",
  fontSize: 10,
});
export const Label = styled("small", {
  fontFamily: "Inter",
  fontSize: 10,
});
