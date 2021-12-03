//GET-ME QUERY to Run as Redirect after log-in
// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  


//CREATE USER ROUTE
export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

//LOG-IN USER ROUTE
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};


// DELETE IMAGE for Logged in User
export const deleteImage = (imageId, token) => {
    return fetch(`/api/users/images/${imageId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
};
  
// DELETE ALBUM for Logged in User
export const deleteAlbum = (albumId, token) => {
  return fetch(`/api/users/albums/${albumId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};