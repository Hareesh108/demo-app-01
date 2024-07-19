import styles from "../styles/variables.module.scss";

export default {
  fontFamily: styles.fontFamily,
  // headings
  h1: {
    fontFamily: styles.fontFamily,
    fontSize: "var(--boost-menu-item-font-size)",
    fontWeight: "var(--boost-largetext-weight)",
    height: "46px",
  },
  h2: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-h2)",
  },
  h3: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-h3)",
  },
  h4: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-h4)",
  },
  h5: {
    fontFamily: styles.fontFamily,
    fontSize: "var(--boost-h5)",
    // fontWeight: "500px"
  },
  h6: {
    fontFamily: styles.fontFamily,
    fontWeight: "var(--boost-label-weight)",
    fontSize: "var(--boost-h6)",
  },

  /* --Subheadings-- */
  subtitle1: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-sh1)",
  },
  subtitle2: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-sh2)",
  },
  overline: {
    fontFamily: "var(--boost-wf-headings)",
    fontSize: "var(--boost-sh3)",
  },
  button: {
    fontFamily: styles.fontFamily,
    fontSize: "var(--boost-sh4)",
  },

  /* --Body-- */

  body: {
    fontFamily: styles.fontFamily,
    fontSize: "14px",
  },
  body1: {
    fontFamily: styles.fontFamily,
    fontSize: "var(--boost-p2)",
  },
  caption: {
    color: "#231F20",
    fontFamily: "Maven Pro",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "18px",
  },
  inherit: {
    fontFamily: styles.fontFamily,
    fontWeight: "var(--boost-label-weight)",
    fontSize: "var(--boost-label-size)",
  },
};
