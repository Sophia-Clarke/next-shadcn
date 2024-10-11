## next-shadcn

## About

Next-Shadcn is a fully dynamic, open-source tool designed to streamline the creation of complex components in Next.js applications using Shadcn. It enables developers to build visually appealing applications that meet specific requirements. Built on top of the Dialog, Popover, and Menu components from Shadcn UI, Next-Shadcn enhances productivity and fosters creativity in web development.

## Installation

To install the next-shadcn , simply run the following command

For npm:

```bash
npm i next-shadcn
```

Yarn:

```bash
yarn add next-shadcn
```

pnpm:

```bash
pnpm add next-shadcn
```

## Features

- **Customization**: Tailor components by utilizing props to meet your specific design and functionality needs. This provides complete control over the components, allowing you to efficiently and effectively build modern web applications.
- **Accessibility**: Crafted with accessibility in mind, this approach ensures that a wider audience can interact with your applications.
- **Performance Enhancement**: Engineered to mitigate common performance issues found in web applications, it provides a smoother user experience and quicker load times.
- **Next.js**: Built using the Next.js framework.
- **TypeScript**: Leverage TypeScript for type-safe development.
- **Tailwind CSS**: Harness the capabilities of Tailwind CSS for styling.
- **Shadcn/ui**: Pre-integrated with shadcn/ui for rapid and clean UI development.

## Usage

The CustomDialog component is designed for flexibility and ease of use in applications. Below, you will find detailed instructions on how to implement this component, along with various customization options to adapt it to specific needs

**Basic Usage**
To use the CustomDialog component with default settings, simply add it to a main component like this:

`<CustomDialog />`

This will render the dialog with its default properties.

**Customization Options**
The CustomDialog can be customized with several properties that enable dynamic changes to the content, buttons, and background. Below are the available properties:

```
<CustomDialog
  containerClassName="flex items-center justify-center p-10 min-h-[40vh] min-w-[30vw]"
  cardClassName="backdrop-blur-xl bg-blue-100 border p-6 w-full sm:w-50 md:w-80 lg:w-96 h-auto dark:border-gray-300 dark:text-white"
  titleClassName="font-bold text-2xl text-blue-800"
  descriptionClassName="pt-3 text-gray-700"
  backgroundImage="/img2.svg"
  buttonColor="#f43f5e"
  title="Change the title of main dialog  in the CustomDialog component as needed"
  description="Change the description and content of main dialog  in the CustomDialog component as needed"
  titleDialog="Change the title of the second dialog  in the CustomDialog component as needed"
  descriptionDialog="Change the description of the second dialog in the CustomDialog component as needed"
  titlePopover="Change the title of the popover in the CustomDialog component as needed"
  descriptionPopover="Change the description in the CustomDialog component as needed"
/>
```

## License

Licensed under the [MIT license]
