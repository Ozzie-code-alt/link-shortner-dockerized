# Link Shortener & Analytics Dashboard

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A full-stack link shortening service built with Next.js, TypeScript, and Prisma. This application allows users to convert long URLs into short, manageable links and provides a detailed analytics dashboard to track click-through performance. The entire application is containerized with Docker for easy setup and deployment.

---

## Features

-   **Shorten URLs:** Convert any long URL into a unique, 6-character short link.
-   **Link Redirection:** Fast and reliable redirection from the short link to the original URL.
-   **Click Analytics:** Every click is tracked and recorded.
-   **Analytics Dashboard:** A detailed view for each link, showing:
    -   Total click count.
    -   Timeline of click events.
    -   Geographical data (clicks by country).
    -   Referrer information (user agent).
-   **Fully Typed:** Built with TypeScript from end to end for robust, error-free code.
-   **Containerized:** Includes `Dockerfile` and `docker-compose.yml` for a one-command setup.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Database ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Containerization:** [Docker](https://www.docker.com/) & Docker Compose

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing.

### Prerequisites

You must have the following software installed:
-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose

### 1. Running with Docker (Recommended)

This is the easiest way to get the entire stack (Next.js app + PostgreSQL database) running.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/link-shortener.git](https://github.com/your-username/link-shortener.git)
    cd link-shortener
    ```

2.  **Create an environment file:**
    Copy the example environment file. The default values are configured to work with Docker Compose out of the box.
    ```bash
    cp .env.example .env.local
    ```

3.  **Build and run the containers:**
    ```bash
    docker-compose up --build
    ```
    This command will build the Next.js image, pull the official Postgres image, and start both services. The app will be available at `http://localhost:3000`.

### 2. Running Locally (Without Docker)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/link-shortener.git](https://github.com/your-username/link-shortener.git)
    cd link-shortener
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the Database:**
    Make sure you have a PostgreSQL server running. Create an `.env.local` file and add your database connection string:
    ```env
    # .env.local
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    ```

4.  **Run Prisma migrations:**
    This will create the necessary tables (`Link`, `Click`) in your database.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## Future Scope & AI Integrations

This project has a solid foundation that can be extended with many powerful features.

### Standard Features

-   **User Authentication:** Implement NextAuth.js or Clerk to allow users to sign up, log in, and manage their own links.
-   **Custom Slugs:** Allow authenticated users to choose their own custom slugs (e.g., `sh.rt/my-portfolio`).
-   **QR Code Generation:** Automatically generate a downloadable QR code for every shortened link.
-   **Link Expiration:** Allow users to set an expiration date for their links.

### AI-Powered Integrations

-   **🤖 Malicious Link Detection:**
    -   Integrate an AI service (or a custom-trained model) that analyzes the `originalUrl` upon submission.
    -   The model could classify URLs as "safe," "suspicious," or "malicious" based on patterns and known threats, preventing the platform from being used for phishing or malware distribution.

-   **📈 Predictive Click Analytics:**
    -   Use the historical click data to train a time-series forecasting model.
    -   The dashboard could display predictions like, "This link is projected to receive **~200 more clicks** in the next 7 days," providing valuable insights for marketing campaigns.

-   **📝 AI-Generated Link Summaries:**
    -   When a user pastes a link, an AI agent could crawl the destination page in the background.
    -   Using a Large Language Model (LLM) like Gemini, it could generate a concise, one-sentence summary of the page's content. This summary would be stored and displayed on the dashboard, reminding the user what the link is about.

-   **🚨 Anomaly Detection for Bot Traffic:**
    -   Develop a system that analyzes incoming click patterns in real-time.
    -   An AI model could learn what "normal" traffic looks like for a link and automatically flag anomalies—such as thousands of clicks from a single IP address in a few seconds—as likely bot activity, helping to keep analytics clean and accurate.
