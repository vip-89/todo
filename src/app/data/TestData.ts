// test data in the form of arrays (replace the database tables)
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Relaxation'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finance'},
    {id: 8, title: 'Gadgets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Car'},
    {id: 11, title: 'Repairs'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Middle', color: '#85D1B2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Very urgent!!', color: '#F1128D'}
  ];


  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-04-10')
    },

    {
      id: 2,
      title: 'Send food reports to the head of department',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2021-04-11')
    },

    {
      id: 3,
      title: 'Clean up my room, water the plants',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Go to the park with the family, invite your friends',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2021-08-17')
    },
    {
      id: 5,
      title: 'Find and learn a textbook on quantum physics',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Go to a programming seminar',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2021-06-11')
    },

    {
      id: 7,
      title: 'Find tickets to Turkey, choose a hotel',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Prepare dinner for the whole family (salmon with potatoes)',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Pull up 10 times',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      title: 'Run 100 m',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Organize a children\'s party ',
      completed: false
    },

    {
      id: 12,
      title: 'Go to the lecture "How to learn to program in Java"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Buy groceries for a week',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2021-05-11')
    },

    {
      id: 14,
      title: 'Hold a meeting about all projects',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Pass the Java exam',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      title: 'Put 100,000 $ in the bank for a deposit',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Ask for an advance on the job',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Get tested, check hemoglobin',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')

    },

    {
      id: 19,
      title: 'Compare new iPad with Samsung',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2021-10-11')

    },

    {
      id: 20,
      title: 'Football with employees',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-03-17')

    }

  ];

}

