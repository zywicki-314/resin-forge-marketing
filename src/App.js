import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home-page";
import AboutPage from "./components/about-page";
import BlogPage from "./components/blog-page";
import ContactPage from "./components/contact-page";
import MainLayout from "./components/layouts/MainLayout";
import SingleBlogArticle from "./components/blog/blog-single-article";
import "./App.css";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:path" element={<SingleBlogArticle />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <a
          href="https://github.com/zywicki-314/resin-forge-marketing"
          rel="noreferrer"
          target="_blank"
          className="gitLink"
        >
          <img
            src="/img/github-svgrepo-com.svg"
            alt="logo GitHub"
            className="logoGitHub"
          />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
