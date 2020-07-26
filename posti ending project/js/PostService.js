import PromiseService from './PromiseService.js';
import {
    posts
} from './posts.js';

class PostService extends PromiseService {

    getPosts() {

        return this.getDataAsPromise(posts, 'No Posts Found');

    }
    postItem(title, imageUrl, category, publishDate, writtenBy, article) {
        return `
        <div class="col-md-6 my-2">
            <div class="card post-card-wrp">
                <img height="359"
                    src="${ imageUrl}"
                    class="card-img-top" alt="Post Image">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <small>
                    <span>
                    <i class="fa fa-tag"></i>
                    ${category}
                    </span>
                    <span>
                    <i class="fa fa-calendar"></i>
                    ${publishDate}
                    </span>
                    <span>
                    <i class="fa fa-user-circle"></i>
                    ${writtenBy}
                    </span>
                    </small>
                    <p class="card-text">${article}</p>

                </div>
            </div>
        </div>
        `;
    }
}

export default new PostService();