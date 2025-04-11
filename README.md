# ⚡ QuickFormX – Form Builder (Client)

QuickFormX is a modern, scalable, and customizable **drag-and-drop form builder** built for developers, startups, and businesses. This is the **client-side** interface of the project, designed with a focus on performance, modularity, and real-world use cases.

---

## 🧠 Features

- 🔲 Drag and drop form builder
- 🧱 Pre-built components (Input, Checkbox, Radio, Dropdown, etc.)
- 🎨 Live preview & editing
- 🧬 JSON schema export
- 🌐 REST API integration (for submissions and form management)
- ☁️ Save/load forms via backend
- 🔐 Auth integration (coming soon)
- 📱 Fully responsive & mobile-ready

---

## 🛠 Tech Stack

| Tech         | Description                       |
|--------------|-----------------------------------|
| React        | Frontend framework                |
| JavaScript   | Type-safe development             |
| Tailwind CSS | Utility-first styling             |
| ShadCN UI    | Accessible and elegant components |
| Zustand      | Lightweight state management      |
| DnD Kit      | Drag-and-drop library             |
| Vite         | Fast build tool                   |

---

## 📁 Folder Structure (Client)

```bash
quickformx-client/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── features/           # Drag-drop, editor, preview logic
│   ├── pages/              # Route components (dashboard, builder)
│   ├── store/              # Zustand store
│   ├── lib/                # Utils and helpers
│   ├── hooks/              # Custom React hooks
│   ├── types/              # JavaScript interfaces
│   └── App.tsx             # Root app component
├── index.html              # Root HTML
├── vite.config.ts          # Vite configuration
└── tailwind.config.js      # Tailwind CSS config
