- React Component Structure (Diagram)

```d
.
├── src
│   ├── App.tsx // Routing
│   ├── actions // Actions for server(e.g. Fetching data)
│   ├── components // Detailed below
│   │   ├── layout
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── pages
│   │   └── ui
│   ├── constants // Constant values can be used in the entire app, but can't not be updated.
│   ├── hooks // Custom hooks can be reused
│   ├── lib // utils and methods from libraries
│   ├── providers // providers can be used in a specific scope
│   ├── main.tsx // Entry point
│   ├── index.css
│   ├── types.ts // Custom types
│   ├── users.json
│   └── vite-env.d.ts
├── ...
```

- Data Map (Components and States)

  - Components

    - Follow atomic design
      - https://blog.logrocket.com/atomic-design-react-native/

    ```
        ui(atoms): These are the building blocks, which cannot be further broken down
        molecules: atoms grouped together form a single molecule
        organisms: Molecules joined together to create a part of the interface
        pages: Pages
        layout: Page layouts

    ```

    - For atoms, use only shadcn
      - https://ui.shadcn.com

- Design Documentation. (Fonts, Icons, Colors, etc).

  - Fonts
    No fonts change is permitted.
  - Icons
    1. Use ReactIcons(Phosphor Icons) by importing them. Never add any files for icons.
       https://react-icons.github.io/react-icons/icons?name=pi
    2. If there is not icons suitable for the purpose, you can pick from other projects in react-icons.
  - Colors
    1. Use only css variables in index.css (primary, secondary, ghost, etc...)
    2. If there is not suitable colors for thr purpose, you can add new color.
    3. In that case, use xx-500 color. (e.g. red-500, blue-500, green-500)
  - Styling
    1. Use tailwindCSS
    2. Don't create your own atomic components, but install from shadcn.
