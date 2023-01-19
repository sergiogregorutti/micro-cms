import Header from '../organisms/Header';
import AddEditForm from '../organisms/AddEditForm';

function EditPost({id}) {
  return (
    <div className="main-wrapper">
      <Header />
      <AddEditForm id={id} />
    </div>
  );
}

export default EditPost;
