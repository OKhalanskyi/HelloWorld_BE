import { DataSource } from "typeorm"
import { connectionDatabase } from './typeorm-config';

const AppDataSource: DataSource = new DataSource({
  ...connectionDatabase
})

export default AppDataSource