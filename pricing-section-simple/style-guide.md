# Challenge Style Guide

This style guide outlines the design standards and specifications for the challenges, which are built using the same design system. It serves as a reference for maintaining visual consistency across various aspects of design, including typography, color schemes, layout, and other design elements.

We might update the style guide from time to time, so check the style guide in the "Assets" tab in your challenge for the latest version.

## Device breakpoints

The designs have been created with the following device widths in mind:

| Device breakpoint | Width  | Container max width | Columns | Side padding | Gap  |
| ----------------- | ------ | ------------------- | ------- | ------------ | ---- |
| Desktop           | 1440px | 1170px              | 12      | 32px         | 32px |
| Tablet            | 768px  | 768px               | 6       | 32px         | 32px |
| Mobile            | 375px  | 375px               | 4       | 16px         | 16px |

A container is the maximum horizontal space allowed to display the contents for the breakpoint and should be horizontally centered on the page. For tablet and mobile, the container fills the spans across the entire screen.

## Spacing

Most spacing values (padding, margin, gap) are multiples of 4px.

## Typography

Font family: [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans)

_P.S. The custom font has been loaded for you in index.html_

### Font weights

All the available font weights from 100 - 900 have been loaded for you but you primarily only need font weights from 400 to 600.

| Weight | Name     | Tailwind class  | Commonly used for                                      |
| ------ | -------- | --------------- | ------------------------------------------------------ |
| 400    | Normal   | `font-normal`   | Body                                                   |
| 500    | Medium   | `font-medium`   | Buttons, labels, links, and other interactive elements |
| 600    | Semibold | `font-semibold` | Headings                                               |

Feel free to load fewer font weights if your challenge does not use them.

### Font sizes / line heights

The typography scale has been taken from [Tailwind CSS' default font size scale](https://tailwindcss.com/docs/font-size). If you are using Tailwind CSS for styling, setting the font size and line height will be a breeze by using the `font-*` classes.

| Name | Size / Height | Tailwind class | Commonly used for                                            |
| ---- | ------------- | -------------- | ------------------------------------------------------------ |
| xs   | 12px / 16px   | `text-xs`      | Badge labels                                                 |
| sm   | 14px / 20px   | `text-sm`      | Badge labels, Form labels, Form placeholders, Form hint text |
| base | 16px / 24px   | `text-base`    | Body, Section labels, Button labels                          |
| lg   | 18px / 28px   | `text-lg`      | Button labels                                                |
| xl   | 20px / 28px   | `text-xl`      | Section subtitles                                            |
| 2xl  | 24px / 32px   | `text-2xl`     | Card titles                                                  |
| 3xl  | 30px / 36px   | `text-3xl`     | Section titles (mobile)                                      |
| 4xl  | 36px / 40px   | `text-4xl`     | Main title (mobile)                                          |
| 5xl  | 48px / 48px   | `text-5xl`     | Main title (tablet), Section titles (desktop and tablet)     |
| 6xl  | 60px / 60px   | `text-6xl`     | Main title (desktop)                                         |

## Color palette

The color palette is entirely taken from [Tailwind CSS' default color palette](https://tailwindcss.com/docs/customizing-colors). If you are using Tailwind in your code, using these colors will be a breeze. The following Tailwind CSS colors are frequently used: Neutral, Indigo, Green, Red.

TODO: add color styles.

## Icons

Icons are from [Remix Icon](https://remixicon.com/). Feel free to replace with your own icons! We particularly like [React Icons](https://react-icons.github.io/react-icons/) because it provides convenient access to many free and open source icon sets, including Remix Icon.
