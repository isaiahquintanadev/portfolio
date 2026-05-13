const smoothEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: smoothEase },
  viewport: { once: true, amount: 0.18, margin: "0px 0px -72px 0px" },
};

export const fadeUpStagger = (i: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    delay: Math.min(i * 0.04, 0.18),
    duration: 0.42,
    ease: smoothEase,
  },
  viewport: { once: true, amount: 0.16, margin: "0px 0px -64px 0px" },
});
