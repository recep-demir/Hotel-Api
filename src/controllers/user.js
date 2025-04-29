"use strict";

const User = require("../models/user");

module.exports = {
    list: async (req, res) => {

        /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'List Users'
        #swagger.desription = `
            You can send query with endpoint for filter[], search[], sort[], page and limit.
            <ul> Examples usage:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */

        const result = await res.getModelList(User);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            result,
          });

    },
    create: async (req, res) => {
        /* 
                #swagger.tags = ['Users']
                #swagger.summary = 'Create User'
            */
    
        //Password validation
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
            req.body.password
          )
        ) {
          res.errorStatusCode = 401;
          throw new Error(
            "Password must be at least 8 characters long and contain at least one special character and  at least one uppercase character "
          );
        }
        const result = await User.create(req.body);
    
        res.status(201).send({
          error: false,
          result,
        });
      },


}