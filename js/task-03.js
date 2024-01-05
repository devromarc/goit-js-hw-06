const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Use an array of objects images to create <img> elements nested in <li>. Use template strings and the insertAdjacentHTML() method to create markup.

// All gallery items must be added to DOM in one insert operation.
// Add at least some gallery design with flexboxes or grids using CSS classes.

const gallery = document.querySelector('.gallery');

const galleryMaker = images => {
  const galleryList = images.map(
    ({url,alt}) =>
      `<li class="item"><img class = "galleryImage" src="${url}" alt="${alt}"></li>`,
  );
   return gallery.insertAdjacentHTML('beforeend', galleryList.join(''));
};

galleryMaker(images);
