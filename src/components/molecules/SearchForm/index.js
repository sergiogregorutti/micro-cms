import React, {useState} from 'react';
import Label from '../../atoms/Label';
import InputText from '../../atoms/InputText';
import SubmitButton from '../../atoms/SubmitButton';
import usePosts from '../../utils/usePosts';
import {useNavigate} from 'react-router-dom';

import './styles.scss';

function SearchForm() {
  const navigate = useNavigate();
  const posts = usePosts();
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = e => {
    const suggestions = posts;
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(suggestion => suggestion.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value)
  };

  const onClick = e => {
    setFiltered([]);
    setIsShow(false);
    setInput('');
    navigate(`/blog/posts/${e.currentTarget.dataset.id}`);
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion) => {
              return (
                <li data-id={suggestion.id} key={suggestion.id} onClick={onClick}>
                  {suggestion.title}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    return <></>;
  }

  return (
    <form className="search-form">
      <Label id="search-the-site">Search the site</Label>
      <InputText id="search-the-site" placeholder="Enter keyword" onChange={onChange} value={input}></InputText>
      <SubmitButton>Search</SubmitButton>
      {renderAutocomplete()}
    </form>
  )
}

export default SearchForm;
