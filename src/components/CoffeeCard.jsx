import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, category, taste, details, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000//coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== id);
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-300 shadow-sm">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>

      <div className="w-full flex justify-between items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Supplier:{supplier}</p>
          <p>Taste:{taste}</p>
          <p>Category:{category}</p>
          <p>Details:{details}</p>
        </div>

        <div className="card-actions justify-end pr-6">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">
              <Link to={`/updateCoffee/${_id}`}>Edit</Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
