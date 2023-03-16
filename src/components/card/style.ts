import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
  backgroundColor: "#F6F8FA",
  padding: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  transition: ".2s",
  borderRadius: 4,
  "&:hover": {
    backgroundColor: "#C9CED3",
  },
  variants: {
    imageHidden: {
      true: {
        paddingLeft: 26,
      },
    },
    col: {
      true: {
        flexDirection: "column",
        maxWidth: 165,
        textAlign: "center",
      },
    },
  },
});
export const UserInformationGroup = styled("div", {
  display: "flex",
  gap: 8,
  flexDirection: "column",
});
export const Avatar = styled("img", {
  width: "42px",
  height: "42px",
  borderRadius: 100,
});
export const Name = styled("h1", {
  fontFamily: "Inter",
  fontSize: 14,
  margin: 0,
});
export const Position = styled("small", {
  fontFamily: "Inter",
  fontSize: 11,
  color: "#999CA0",
});
