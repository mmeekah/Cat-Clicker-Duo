const cat1 = {
  name: "Murka",
  picture: "1.jpg",
  clicks: 0
};

const cat2 = {
  name: "Kisa",
  picture: "2.jpg",
  clicks: 0
};

const cat1Container = document.querySelector("#cat-1");
const cat2Container = document.querySelector("#cat-2");

// Add cat names
const cat1Name = document.createElement("h1");
cat1Name.textContent = cat1.name;
cat1Container.appendChild(cat1Name);

const cat2Name = document.createElement("h1");
cat2Name.textContent = cat2.name;
cat2Container.appendChild(cat2Name);

//Add cat image

const cat1Image = document.createElement("img");
cat1Image.setAttribute("src", cat1.picture);
cat1Image.setAttribute("alt", "picture of cat1");
cat1Container.appendChild(cat1Image);

const cat2Image = document.createElement("img");
cat2Image.setAttribute("src", cat2.picture);
cat1Image.setAttribute("alt", "picture of cat2");
cat2Container.appendChild(cat2Image);

//Add cat counters

const cat1Counter = document.createElement("h1");
cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
cat1Container.appendChild(cat1Counter);

const cat2Counter = document.createElement("h1");
cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
cat2Container.appendChild(cat2Counter);

//Add cat image event Listeners

cat1Image.addEventListener("click", () => {
  cat1.clicks++;
  cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
});

cat2Image.addEventListener("click", () => {
  cat2.clicks++;
  cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
});
