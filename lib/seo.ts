export const seo = {
  title: 'NoBad Work | 不错工作室',
  description:
    '“不错”工作室，致力于发展成为一个专注于探索和发掘程序员自由职业潜力的创新平台。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://nobad.work'
      : 'http://localhost:3000'
  ),
} as const
