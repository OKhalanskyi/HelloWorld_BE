// import { Seeder, SeederFactoryManager } from 'typeorm-extension';
// import { DataSource } from 'typeorm';
// import { PersonEntity } from '../../dist/database/entities/Person.entity';
// import people from '../../mocks/people.json';
//
// export default class PersonSeeder implements Seeder {
//   public async run(
//     dataSource: DataSource,
//     factoryManager: SeederFactoryManager
//   ): Promise<any> {
//     const personRepository =  dataSource.getRepository(PersonEntity);
//
//     const mockedPeople = people.people as PersonEntity[];
//
//     await Promise.all(
//       mockedPeople.map(async person => {
//         const newPerson = await personRepository.create({
//           name: person.name
//         })
//
//         return await personRepository.save(newPerson)
//       })
//     )
//   }
// }