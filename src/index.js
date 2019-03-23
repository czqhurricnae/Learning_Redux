import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import appReducer from './reducers';
import {createPost, editPost} from './actions';

let store = createStore(appReducer);
/* const unsubscribe = store.subscribe(() => {
 *     console.log('state changed:', store.getState());
 * }); */
/* store.dispatch({type: 'CREATE_POST', user: 'dan', text: 'hello world'}); */
const root = document.getElementById('root');
const render = () => {
    root.innerHtml = '';
    const {posts} = store.getState();
    posts.forEach((post)=> {
        const item = document.createElement('li');
        const text = document.createTextNode(post.user + ' - ' + post.text);
        item.appendChild(text);
        root.appendChild(item);
    });
}
const stopRender = store.subscribe(render);
store.dispatch(createPost('dan', 'hello, world'));
store.dispatch(createPost('des', 'second post'));
serviceWorker.unregister();
