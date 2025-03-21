import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UsersTrans = () => {

      // Using Tanstack Query
      const {isPending,isError, data: users, error} = useQuery({
            queryKey: ['users'],
            queryFn: async() =>{
                  const res = await fetch(`https://coffee-store-server-pi-woad.vercel.app/users`);
                  return res.json();
            }
      })


       const handleDeleteUser = (id) => {
          Swal.fire({
            title: "Are you sure Delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://coffee-store-server-pi-woad.vercel.app/users/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining)
                  }
                });
            }
          });
        };

        if(isPending){
            return <div className="text-center"><span className="loading loading-bars text-primary loading-lg"></span></div>
        }

        if(isError){
            return <div className="text-center"><span>Error: {error.message}</span></div>
        }



      return (
            <div>
      <h2 className="text-center text-primary font-bold my-4">
        User are Coming here: {users.length}
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>LoginTime</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>Name: {user.name}</td>
                  <td>Email: {user.email}</td>
                  <td>Time: {user.lastSignInTime}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-sm btn-warning"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      );
};

export default UsersTrans;