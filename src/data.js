export const testData = [{
"cuisineType":
   
    [{"id":1,"cuisineType":"Italian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"

},
    {"id":2,"cuisineType":"Indian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
    {"id":3,"cuisineType":"American","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
    {"id":4,"cuisineType":"Thai","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
    {"id":5,"cuisineType":"Mexican","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
    {"id":6,"cuisineType":"European","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"}
    ],
"users":
    [
    {
    "Login":
        {"id":1,"email":"homechef@app.com","password":"homechef"},
    "chefTable":
        {"id":1,"aboutMe":"I am chef Mario. I like to cook Italian Food. I love pizza.I believe every dish should have three very important ingredients: dedication, passion and love! My menu will bring you the taste of Spain from land to sea with exciting flavours and great ingredients","cuisineType":1,"rating":4,"postCode":1000,"chefPhoto":"https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg"},
    "cuisineInter":
        {"id":1,"chefTable_id":1,"cuisineType_id":1},
    "cuisineType":
        [{"id":1,"cuisineType":"Italian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
        {"id":2,"cuisineType":"Indian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
        {"id":3,"cuisineType":"American","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"}],

    "menuDetails":
        [{"id":1,"description":"The secret to getting uber tender meatballs is bread; yes, bread. And the secret to getting uber flavorful meatballs is in the combination of meats - I am talking about lean ground beef with sweet Italian sausage.","name":"Spaghetti and Meatballs","date":"2023-01-09","price":14.5,"userOrder_rating":4.5,"chefTable_id":1,"menuPhoto":"https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg"}],
    "userOrders":
        [{"id":1,"menuDetails_id":1,"date":"2023-01-09","rating":4.1,"totalPrice":24,"userTable_id":1}],
    "userTable":
        {"id":1,"name":"Mario","pre_nom":"Antonio","address":"123 Becentral","postCode":1000,"phone":323232323,"chefTable_id":1,"login_id":1,"userOrders_id":1}
        

    },
    {
        "Login":
            {"id":2,"email":"homechef@app.com","password":"homechef"},
        "chefTable":
            {"id":2,"aboutMe":"I am chef Mario. I like to cook Italian Food. I love pizza.","cuisineType":2,"rating":4,"postCode":1000,"chefPhoto":null},
        "cuisineInter":
            {"id":2,"chefTable_id":2,"cuisineType_id":2},
        "cuisineType":
            [{"id":1,"cuisineType":"Italian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
            {"id":2,"cuisineType":"Indian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
            {"id":3,"cuisineType":"American","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"}],
    
        "menuDetails":
            [{"id":2,"description":"The secret to getting uber tender meatballs is bread; yes, bread. And the secret to getting uber flavorful meatballs is in the combination of meats - I am talking about lean ground beef with sweet Italian sausage.","name":"Spaghetti and Meatballs","date":"2023-01-09","price":14.5,"userOrder_rating":4.5,"chefTable_id":1,"menuPhoto":"https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg"}],
        "userOrders":
            [{"id":2,"menuDetails_id":1,"date":"2023-01-09","rating":4.1,"totalPrice":24,"userTable_id":1}],
        "userTable":
            {"id":2,"name":"Mario","pre_nom":"Mario","address":"123 Becentral","postCode":1000,"phone":323232323,"chefTable_id":1,"login_id":1,"userOrders_id":1}

        },
        {
            "Login":
                {"id":3,"email":"homechef@app.com","password":"homechef"},
            "chefTable":
                {"id":3,"aboutMe":"I am chef Mario. I like to cook Italian Food. I love pizza.","cuisineType":3,"rating":4,"postCode":3000,"chefPhoto":null},
            "cuisineInter":
                {"id":3,"chefTable_id":3,"cuisineType_id":3},
            "cuisineType":
                [{"id":1,"cuisineType":"Italian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
                {"id":2,"cuisineType":"Indian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
                {"id":3,"cuisineType":"American","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"}],
        
            "menuDetails":
                [{"id":3,"description":"The secret to getting uber tender meatballs is bread; yes, bread. And the secret to getting uber flavorful meatballs is in the combination of meats - I am talking about lean ground beef with sweet Italian sausage.","name":"Spaghetti and Meatballs","date":"2023-01-09","price":14.5,"userOrder_rating":4.5,"chefTable_id":1,"menuPhoto":"https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg"}],
            "userOrders":
                [{"id":3,"menuDetails_id":1,"date":"2023-01-09","rating":4.1,"totalPrice":24,"userTable_id":1}],
            "userTable":
                {"id":3,"name":"Mario","pre_nom":"Mario","address":"123 Becentral","postCode":1000,"phone":323232323,"chefTable_id":1,"login_id":1,"userOrders_id":1}
                
        
            },
            {
                "Login":
                    {"id":4,"email":"homechef@app.com","password":"homechef"},
                "chefTable":
                    {"id":4,"aboutMe":"I am chef Mario. I like to cook Italian Food. I love pizza.","cuisineType":1,"rating":4,"postCode":1000,"chefPhoto":null},
                "cuisineInter":
                    {"id":2,"chefTable_id":2,"cuisineType_id":2},
                "cuisineType":
                    [{"id":1,"cuisineType":"Italian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
                    {"id":2,"cuisineType":"Indian","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"},
                    {"id":3,"cuisineType":"American","cuisinePhoto":"https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg"}],
            
                "menuDetails":
                    [{"id":4,"description":"The secret to getting uber tender meatballs is bread; yes, bread. And the secret to getting uber flavorful meatballs is in the combination of meats - I am talking about lean ground beef with sweet Italian sausage.","name":"Spaghetti and Meatballs","date":"2023-01-09","price":14.5,"userOrder_rating":4.5,"chefTable_id":1,"menuPhoto":"https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg"}],
                "userOrders":
                    [{"id":4,"menuDetails_id":1,"date":"2023-01-09","rating":4.1,"totalPrice":24,"userTable_id":1}],
                "userTable":
                    {"id":4,"name":"Mario","pre_nom":"Mario","address":"123 Becentral","postCode":1000,"phone":323232323,"chefTable_id":1,"login_id":1,"userOrders_id":1}
                    
                }
]}]