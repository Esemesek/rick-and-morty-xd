export function smallScreenStyles(styles: string) {
  return `
  @media only screen and (max-width: 900px) {
    ${styles}
  }
`;
}
