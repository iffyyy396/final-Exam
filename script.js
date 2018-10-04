function initialize(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
        success: function(data){
            console.log(data);
            for(let i = 0; i <= 3; i++){
                document.querySelector('.nav-text').innerHTML = data.menuOptions[i];
            }
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-titleB').innerHTML = data.sale.heading;
            document.querySelector('.card-textB').innerHTML = data.sale.description;
            document.querySelector(`.img-heading`).style.background = `url(https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7dbbae22c460b4d630921586424d242&auto=format&fit=crop&w=1500&q=80)`;
        
        },
        erorr(err){
            console.log(err)
        }
})};
function english(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,
        success: function(data){
            console.log(data);
            for(let i = 0; i <= 3; i++){
                document.querySelector('.nav-text').innerHTML = data.menuOptions[i];
            }
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-titleB').innerHTML = data.sale.heading;
            document.querySelector('.card-textB').innerHTML = data.sale.description;
            document.querySelector(`.img-heading`).style.background = `url(https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7dbbae22c460b4d630921586424d242&auto=format&fit=crop&w=1500&q=80)`;
        
        },
        erorr(err){
            console.log(err)
        }
})};
function urdu(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
        success: function(data){
            console.log(data);
            for(let i = 0; i <= 3; i++){
                document.querySelector('.nav-text').innerHTML = data.menuOptions[i];
            }
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-titleB').innerHTML = data.sale.heading;
            document.querySelector('.card-textB').innerHTML = data.sale.description;
            document.querySelector(`.img-heading`).style.background = `url(https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7dbbae22c460b4d630921586424d242&auto=format&fit=crop&w=1500&q=80)`;
        
        },
        erorr(err){
            console.log(err)
        }
})};
function chinese(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
        success: function(data){
            console.log(data);
            for(let i = 0; i <= 3; i++){
                document.querySelector('.nav-text').innerHTML = data.menuOptions[i];
            }
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-titleB').innerHTML = data.sale.heading;
            document.querySelector('.card-textB').innerHTML = data.sale.description;
            document.querySelector(`.img-heading`).style.background = `url(https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7dbbae22c460b4d630921586424d242&auto=format&fit=crop&w=1500&q=80)`;
        
        },
        erorr(err){
            console.log(err)
        }
})};