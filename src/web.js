export const btn2 = document.querySelector('.comments')
export const myCom = document.querySelector("div");

btn2.addEventListener('click', () => fetch(' http://localhost:3000/comments')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        for (const com of data) {
            const listItem = document.createElement("p");

            listItem.append(`${com.id}_${com.body}_${com.postId}`);

            myCom.appendChild(listItem);

        }
    }));