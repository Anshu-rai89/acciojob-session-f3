import { getUserLocation } from "./location.js";

const fetchBtn = document.getElementById('fetch');

fetchBtn.addEventListener('click',getUserLocation);