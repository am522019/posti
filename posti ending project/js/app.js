import {
    renderPost,
    renderByCategory,
    renderSearchPosts
} from './postFunctions.js ';

renderPost();

const $searchPosts = document.getElementById('search-posts-field');
const $filterPicker = document.getElementById('category-picker');

$searchPosts.addEventListener('input', event => {

    let searchText = event.target.value.trim();

    if (searchText.length > 0) {

        renderSearchPosts(searchText.toLowerCase());

    } else {
        renderPost();
    }

});

$filterPicker.addEventListener('change', event => {
    let selectedCategory = event.target.value;

    if (selectedCategory != '') {

        renderByCategory(selectedCategory);

    } else {
        renderPost();
    }

});