# MFE E-commerce Platform

This is the host application for a simple e-commerce platform built using a **Micro-Frontend** architecture with **Webpack's Module Federation**.

## Core Concepts

### What are Micro-Frontends?

Micro-Frontends are an architectural style where a web application is composed of smaller, independently deployable frontend applications. Think of it as "microservices for the frontend." This approach allows different teams to work on different parts of the UI in isolation, using their own technology stacks and deployment pipelines, which leads to more scalable and maintainable applications.

### What is Module Federation?

Module Federation is a feature of Webpack 5 that allows a JavaScript application to dynamically load code from another application (a "remote") and, in the process, share dependencies. This is the core technology that enables this micro-frontend architecture, allowing the host application to seamlessly integrate and render components from the remote micro-frontends at runtime without a hard dependency at build time.

## Application Architecture

This project demonstrates a complete micro-frontend setup and consists of a single host application and three remote micro-frontend applications.

*   **Host Application (`mfe-ecommerce-host`):** This is the main shell or container application. It is responsible for rendering the main layout and loading the remote micro-frontends into the page.

*   **Remote Applications (Micro-Frontends):**
    *   **`mfe-ecommerce-search`**: A component that displays a list of products and provides an "Add to Cart" button.
    *   **`mfe-ecommerce-cart`**: A component that displays the items that have been added to the cart.
    *   **`mfe-ecommerce-analytics`**: A component that shows simple analytics, such as the total number of items in the cart.

## Repositories

| Application               | Repository Link                                               |
| ------------------------- | ------------------------------------------------------------- |
| Host (This App)           | [mfe-ecommerce-host](https://github.com/imrohit7604/mfe-ecommerce-host) |
| Search MFE                | [mfe-ecommerce-search](https://github.com/imrohit7604/mfe-ecommerce-search) |
| Cart MFE                  | [mfe-ecommerce-cart](https://github.com/imrohit7604/mfe-ecommerce-cart) |
| Analytics MFE             | [mfe-ecommerce-analytics](https://github.com/imrohit7604/mfe-ecommerce-analytics) |

## Getting Started

To run this project locally, you need to clone all four repositories and run them concurrently.

1.  **Clone all repositories.**

2.  **Install dependencies for each project:**
    Navigate into each of the four project directories and run:
    ```bash
    npm install
    ```

3.  **Start each application:**
    In separate terminal windows, navigate into each project directory and run:
    ```bash
    npm start
    ```

4.  **View the application:**
    Open your browser and navigate to the port specified for the **host application** (e.g., `http://localhost:3000`). You should see the host application running with all the remote components loaded.