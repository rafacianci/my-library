import { getPaginationConfig, changePageItens } from './utils';

describe('Utils', () => {
  describe('#getPaginationConfig', () => {
    it('should return the pages of 100 books', () => {

      const pagination = getPaginationConfig(100)

      expect(pagination).toEqual({
        active: 0,
        collection: [1, 2, 3, 4, 5],
        total: 10
      });
    });

    it('should return the current page', () => {
      const currentPage = 3

      const pagination = getPaginationConfig(100, currentPage)

      expect(pagination).toEqual({
        active: currentPage,
        collection: [1, 2, 3, 4, 5],
        total: 10
      });
    });

    it('should change the pages when chage the default page itens', () => {
      changePageItens(30)

      const pagination = getPaginationConfig(100)

      expect(pagination).toEqual({
        active: 0,
        collection: [1, 2, 3, 4],
        total: 4
      });
    });

    it('should set the current page as first if passed current page is invalid', () => {
      changePageItens(10)

      const pagination = getPaginationConfig(100, 11)

      expect(pagination).toEqual({
        active: 0,
        collection: [1, 2, 3, 4, 5],
        total: 10
      });
    });

    it('should start with the last pages when current page is one of the three last pages', () => {
      let pagination = getPaginationConfig(160, 16)
      expect(pagination).toEqual({
        active: 16,
        total: 16,
        collection: [12, 13, 14, 15, 16]
      });

      pagination = getPaginationConfig(160, 15)
      expect(pagination).toEqual({
        active: 15,
        total: 16,
        collection: [12, 13, 14, 15, 16]
      });

      pagination = getPaginationConfig(160, 14)
      expect(pagination).toEqual({
        active: 14,
        total: 16,
        collection: [12, 13, 14, 15, 16]
      });
    });

    it('should start pagination with the first pages when the current page is one of the three first ones', () => {
      let pagination = getPaginationConfig(160, 1)
      expect(pagination).toEqual({
        active: 1,
        total: 16,
        collection: [1, 2, 3, 4, 5]
      });

      pagination = getPaginationConfig(160, 2)
      expect(pagination).toEqual({
        active: 2,
        total: 16,
        collection: [1, 2, 3, 4, 5]
      });

      pagination = getPaginationConfig(160, 3)
      expect(pagination).toEqual({
        active: 3,
        total: 16,
        collection: [1, 2, 3, 4, 5]
      });
    });

    it('should start with current page minus 2 when the current page is in the middle', () => {
      let pagination = getPaginationConfig(160, 5)
      expect(pagination).toEqual({
        active: 5,
        total: 16,
        collection: [3, 4, 5, 6, 7]
      });

      pagination = getPaginationConfig(160, 8)
      expect(pagination).toEqual({
        active: 8,
        total: 16,
        collection: [6, 7, 8, 9, 10]
      });
    });
  });
});
