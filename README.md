
A professional, React application featuring a secure authentication flow, protected routing, and real-time data fetching from a public API (Json Placeholder).

## 🚀 Features

### **Core Functionality**

* **Secure Authentication**: A fully functional login system with state management.
* **Protected Routes**: The Dashboard is guarded; unauthorized users are automatically redirected to the Login page.
* **Data Visualization**: Dynamically fetches and displays user profiles from JSONPlaceholder in a responsive grid.
* **Error Handling**: Includes a graceful "Retry" mechanism for API failures and meaningful validation messages.

### **Advanced Bonus Features (Requirement 7)**

* **Axios Interceptors**: Globally manages authentication tokens and automatically handles `401 Unauthorized` responses to trigger logouts.
* **Token Expiry Management**: Implements a session timeout based on timestamps to enhance security.
* **Environment Configuration**: Uses `.env` files for decoupling the API Base URL and session limits from the source code.
* **High-Fidelity UI**: Features modern Skeleton Shimmer loaders for an improved perceived performance during data fetching.

## 🔑 Demo Credentials

To access the dashboard, use the following credentials:

* **Username**: `Bret`
* **Password**: `password123`

*(Note: The system accepts any password as it validates the existence of the username via the public API)*.

## 🛠️ Tech Stack

* **Frontend**: React (Vite).
* **Routing**: React Router DOM.
* **API Client**: Axios with custom Interceptors.
* **Styling**: Pure CSS3 with modern variables and animations.

## ⚙️ Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/MohdAzharShaikh/megaplex-assignment.git
cd auth-project

```


2. **Install dependencies**:
```bash
npm install

```


3. **Configure Environment Variables**:
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
VITE_SESSION_EXPIRY_MS=3600000

```


4. **Run the development server**:
```bash
npm run dev

```



## 🌐 Deployment

The project is configured for deployment on **Netlify**.

* **Build Command**: `npm run build`
* **Publish Directory**: `dist`
* **Environment Variables**: Ensure `VITE_API_BASE_URL` and `VITE_SESSION_EXPIRY_MS` are added in the Netlify Dashboard.

---
