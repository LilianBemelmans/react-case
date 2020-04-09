export default class API{

    static fetchData = () => new Promise ( (resolve, reject)  => {
    
        fetch('https://api.dev-master.ninja/reactjs/smoelenboek/get/')
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });
    });

    static saveData = () => new Promise ( (resolve, reject) => {
        
        fetch('https://api.dev-master.ninja/reactjs/smoelenboek/post/')
        .then(response => response.json())
        .then(data => { console.log(data); })
        .catch( error => {console.log(error);});
        alert("Data has been uploaded")
    });
}