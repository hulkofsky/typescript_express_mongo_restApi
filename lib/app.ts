import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import {Routes} from "./routes/crmRoutes"

class App {
    public app: express.Application
    public routePrv: Routes = new Routes()
    public mongoUrl: string = 'mongodb://localhost/CRMdb'

    constructor() {
        this.app = express()
        this.config()
        this.mongoSetup()
        this.routePrv.routes(this.app)
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
    }

    private config(): void {
        this.app.use(morgan('dev'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }
}

export default new App().app
