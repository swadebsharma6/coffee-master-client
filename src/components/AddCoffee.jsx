import Swal from "sweetalert2";

const AddCoffee = () => {

  const handleAddCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, chef, supplier, category, taste, details, photo}

    fetch(`http://localhost:5000/coffee`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)

    })
    .then(res => res.json())
    .then(data =>{
     
      if(data.insertedId){
        Swal.fire({
          title: "Successfully add coffee!",
          icon: "success",
          draggable: true
        });
      }
    })
    

  }

  return (
    <div className="p-20">
      <h2 className="text-3xl font-bold text-primary text-center">
        Add A Coffee
      </h2>

      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="lg:flex gap-5">
            {/* raw lest */}
            <div className="lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Right side */}
            <div className="lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter Chef name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* photo url */}
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter PhotoUrl"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block btn-secondary mt-6"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
