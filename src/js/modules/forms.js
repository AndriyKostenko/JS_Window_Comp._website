

const forms = () => {
    const form  = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          // getting all inpust with field 'user_phone'
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            // replacing all non-numbers for empty space (you can enter only numbers) 
            item.value = item.value.replace(/\D/, '');
        })
    })


    const messsage = {
        loading: 'Loading...',
        success: 'Thanks. We will call you soon.',
        failure: 'Smoething ent wrong.'
    };

    
    const postData = async (url ,data) => {
        // looking for the following block during which will be created during sending the data
        document.querySelector('.status').textContent = messsage.loading;
        // letting know to JS to wait result ('res') first coz fetch() is asynchronous...and then continue 
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        // return will be done only after res.text()
        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
    }

    form.forEach(item => {
        // preventing standart browser work for reloading
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            let statusMassage = document.createElement('div');
            //adding class 'status
            statusMassage.classList.add('status');
            //appending 'div' into the end of form
            item.appendChild(statusMassage);
            // this new object will find all inputs in the current form (item)
            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMassage.textContent = messsage.success;
                })
                .catch(() => statusMassage.textContent = messsage.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMassage.remove()
                    }, 5000);
                })


        })
    })
};

export default forms;