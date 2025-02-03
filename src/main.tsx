import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import avatar from "../assets/avatar.png";
<img src={avatar} alt="Фото" />;
import project1 from "../assets/project1.webp";
<img src={project1 } alt="Фото" />;
import project2  from "../assets/project2.png";
<img src={project2 } alt="Фото" />;
import project3  from "../assets/project3.png";
<img src={project3 } alt="Фото" />;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
