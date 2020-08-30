import React, {useState} from 'react';
import './Create-subreddit.css'
import {createSubReddit} from '../../services/subreddit.service';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


const CreateSubReddit: React.FC = () => {
  const [inputs, setInputs] = useState({
    name: '',
    description: ''
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const [submitted, setSubmitted] = useState(false);

  const {name, description} = inputs;

  function handleChange(e: any) {
    const {name, value} = e.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function discard() {
    setInputs({
      name: '',
      description: ''
    });
    setSubmitted(false);
  }

  function submit(e: any) {
    e.preventDefault();
    setSubmitted(true);

    if (name && description) {
      createSubReddit(dispatch, {name, description}).then(
        () => {
          history.push('/list-subreddits');
        }
      )
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="create-subreddit-container">
          <form className="post-form">
            <div className="form-group">
              <div className="create-subreddit-heading">Create Subreddit</div>
            </div>
            <hr/>

            <input type="text" name="name" className="form-control mt-2" placeholder="Title" value={name} onChange={handleChange} required/>
            {submitted && !name && <span className="text-danger">Title is required</span>}

            <textarea name="description" className="w-100 mt-2" placeholder="Description" value={description} onChange={handleChange} required/>
            {submitted && !description && <span className="text-danger">Description is required</span>}

            <div>
              <div className="mt-2 float-right">
                <button onClick={discard} type="button" className="btnDiscard">Discard</button>
                <button onClick={submit}  type="button" className="btnCreateSubreddit">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSubReddit;
