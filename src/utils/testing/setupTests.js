import {server} from './mock/server.js'

beforeAll(()=> server.listen())


afterEach(()=> server.resetHandlers())

afterAll(()=> server.close())