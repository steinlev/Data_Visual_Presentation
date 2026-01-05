# Data Visual Presentation

## Project Description

This project is a web-based data visualization application developed to demonstrate principled visual communication, modular front-end design, and interactive data presentation. The application is implemented using React and is structured to support reusable visualization components, controlled styling, and data-driven rendering.

The project emphasizes clarity, separation of concerns, and interpretability, with visual elements designed to support analytical reasoning rather than purely aesthetic presentation. It is suitable for inclusion in an academic portfolio as evidence of competency in front-end development, data visualization, and software organization.

The deployed version of the application is available at:  
https://steinlev.github.io/Data_Visual_Presentation/

---

## Objectives

The primary objectives of this project are to:

- Design interactive data visualizations using component-based architecture.
- Apply visualization best practices to structured data.
- Demonstrate proficiency with modern front-end frameworks in an analytical context.
- Create reusable, extensible visualization components suitable for future expansion.

---

## Technical Implementation

The application is built using the React framework and follows a modular component-based design. Styling and logic are separated to promote maintainability and clarity.

### Core Technologies

- **React (JSX)** — Component-based UI construction
- **JavaScript (ES6+)** — Application logic and data handling
- **CSS** — Component-level and global styling
- **JSON** — Structured data input for visualizations

---

## Source Structure

The `src/` directory contains the core application logic and visualization components:

The structure reflects an intentional separation between:

- **Visualization logic**
- **Presentation and styling**
- **Reusable UI controls**
- **Data sources**

---

## Visualization Components

### Average Move Time

The `AverageMoveTime` component renders a data-driven visualization using structured JSON input. The component is designed to:

- Load external data (`AverageMoveTimeData.json`)
- Render visual output based on configurable parameters
- Apply component-specific styling for visual consistency

This design supports interpretability and facilitates future extensions or alternative datasets.

### Dynamic Coloring Functions

The `bar-coloring-functions` directory contains utility functions used to apply dynamic visual encodings. These functions abstract color logic from visualization components, allowing consistent and reusable styling behavior across multiple charts.

### Interactive Controls

The `dropdown-menu-graph-type` and `ui/Select` components provide controlled user inputs that enable interaction with visual elements. These components are designed to support extensibility while maintaining a clean separation from visualization logic.

---

## Design Considerations

The project follows established data visualization and software design principles:

- **Modularity:** Each visualization and UI element is encapsulated in a dedicated component.
- **Reusability:** Utility functions and UI elements are designed for reuse.
- **Readability:** Component logic and styling are clearly separated.
- **Scalability:** The architecture supports adding new visualizations with minimal refactoring.

---

## Deployment

The application is deployed as a static site using **GitHub Pages**, enabling reproducible access without server-side dependencies.

---

## Limitations and Future Work

This project is exploratory in nature and intended to demonstrate core visualization and front-end development principles. Potential future extensions include:

- Additional visualization components using new datasets.
- More advanced interaction patterns (e.g., filtering, brushing).
- Enhanced accessibility support.
- Formal evaluation of visualization effectiveness.

---

## Academic Context

This project was developed as part of an academic data visualization effort and is intended for evaluation in a university portfolio or coursework setting. It demonstrates applied skills in front-end development, modular software design, and data-driven visualization.

---

