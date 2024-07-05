- Metadata là những thông tin của trang web, thường là để tối ưu cho việc SEO
- title: tiêu đề của trang web
- description: mô tả của trang web

# Next/fonts

- Google fonts
- Font weight
- Subset
- Variables
- Multiple fonts
- Local fonts
- Tailwind fonts
  ```ts
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-manrope)"],
        secondary: ["var(--font-roboto)"],
      },
    },
  },
  ```

## Hướng dẫn

- Import
  `import { Manrope, Roboto } from "next/font/google";`

- Khai báo
  `const manrope = Manrope({ subsets: ["latin"] });
const roboto = Roboto({subsets: ["latin"], weight: "400"})`
