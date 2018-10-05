import {Request, Response} from 'express'
import { ContactController } from '../controllers/crmController'

export class Routes {

    public contactController: ContactController = new ContactController()

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'GET request successfull!'
            })
        })

        app.route('/contact')
        //GET endpoint
        .get(this.contactController.getContacts)
        
        //POST endpoint
        .post(this.contactController.addNewContact)

        app.route('/contact/:contactId')
        //get contact by id
        .get(this.contactController.getContactById)

        //Update a contact
        .put(this.contactController.updateContact)
        
        //Delete a contact
        .delete(this.contactController.deleteContact)
    }
}