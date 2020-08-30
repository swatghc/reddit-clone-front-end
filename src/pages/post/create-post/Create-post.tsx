import React, {useState} from 'react';
import './Create-post.css';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {createPost} from '../../../services/post.service';

const CreatePost: React.FC = () => {
  const [inputs, setInputs] = useState({
    postName: '',
    subredditName: '',
    url: '',
    description: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const [submitted, setSubmitted] = useState(false);

  const { postName, subredditName, url, description } = inputs;

  function handleChange(e: any) {
    const {name, value} = e.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function discard() {
    setInputs({
      postName: '',
      subredditName: '',
      url: '',
      description: '',
    });
  }

  function submit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    if (postName && description) {
      createPost(dispatch, {postName, subredditName, description, url}).then(
        () => {
          history.push('/home');
        }
      )
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex flex-row justify-content-center">
        <div className="create-post-container col-md-9">
          <form className="post-form">
            <div className="form-group">
              <div className="create-post-heading">Create Post</div>
              <hr />

              <input type="text" name="postName" className="form-control mt-2" placeholder="Post name" value={postName} onChange={handleChange} required/>
              {submitted && !postName && <span className="text-danger">Post name is required</span>}

              <input type="text" name="subredditName" className="form-control mt-2" placeholder="Subreddit name" value={subredditName} onChange={handleChange} required/>

              <input type="text" name="url" className="form-control mt-2" placeholder="Url" value={url} onChange={handleChange} required/>

              <textarea name="description" className="w-100 mt-2" placeholder="Description" value={description} onChange={handleChange} required/>
              {submitted && !description && <span className="text-danger">Description is required</span>}

              <div>
                <div className="mt-2 float-right">
                  <button onClick={discard} type="button" className="btnDiscard">Discard</button>
                  <button onClick={submit}  type="button" className="btnCreateSubreddit">Create</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

export interface CreatePostPayload {
  postName: string;
  subredditName?: string;
  url?: string;
  description: string;
}
