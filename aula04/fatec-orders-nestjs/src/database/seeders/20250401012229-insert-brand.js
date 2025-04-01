module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('brand', [
      {
        name: 'Nestlé',
      },
      {
        name: 'Danone',
      },
    ]);
  },
 
  async down(queryInterface) {
    return queryInterface.bulkDelete('brand', null);
  },
};