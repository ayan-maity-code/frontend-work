
# Sundown Studio Landing Page

## Overview

The **Sundown Studio Landing Page** is a multi-disciplinary studio website designed to showcase unique experiences, environments, and content. The landing page is visually captivating, featuring smooth animations, interactive elements, and a minimalist design. It also includes two additional pages: a **Weather App** and a **News Search App**, both integrated seamlessly into the main website to enhance user experience.

### Key Features
- **Landing Page**: The primary interface that introduces Sundown Studio's focus and projects, accompanied by a visually engaging video background and smooth scrolling effects.
- **Contact Form**: An interactive (pop up) contact form that allows users to get in touch with Sundown Studio.
- **Weather App**: A simple weather application where users can search for the current weather in different cities. It is integrated with the news feed page . To get the weather data click on the **Check Weather button**.
- **News Search App**: A news search platform that enables users to search for the latest news articles on any topic. Click on the **News Feed** button to see the news about all over the world. Click on the **Search** button to get news.

## Running the Project Locally

### Prerequisites
- A web browser (e.g., Chrome, Firefox, Safari)
- A local server (optional, for enhanced performance)
- Internet connection (for fetching external resources)

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/sundown-studio-landing-page.git
   ```
   Navigate to the project directory:
   ```bash
   cd sundown-studio-landing-page
   ```

2. **Open the Project**:
   - You can simply open the `index.html` file in your preferred web browser to view the landing page.
   - For a better experience, you may use a local server to serve the files:
     ```bash
     npx serve
     ```
   - Open your browser and go to `http://localhost:5000` to view the project.

3. **Navigate the Pages**:
   - Use the navigation links(News Feed) provided on the landing page to access the **Weather App** and **News Search App**.

## Integrated API Endpoints and Their Functionalities

### 1. **Weather App**
   - **API**: OpenWeatherMap API
   - **Endpoint**: 
     ```url
     https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
     ```
   - **Functionality**: Retrieves current weather data (temperature, humidity, wind speed) for the specified city.

### 2. **News Search App**
   - **API**: News API
   - **Endpoint**: 
     ```url
     https://newsapi.org/v2/everything?q={query}&apiKey={API_KEY}
     ```
   - **Functionality**: Fetches news articles related to the searched topic, displaying them on the page with the headline, image, and a brief description.
### 2. **Contact From**
   - **API**: Reqres API
   - **Endpoint**: 
     ```url
     https://reqres.in/api/users
     ```
   - **Functionality**: Fetches the form data.

---

This README file provides an overview of the landing page, instructions on how to run it locally, and details about the integrated API endpoints used in the project.