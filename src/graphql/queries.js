/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScrap = /* GraphQL */ `
  query GetScrap($id: ID!) {
    getScrap(id: $id) {
      id
      fl_forclosures
      md_forclosures
    }
  }
`;
export const listScraps = /* GraphQL */ `
  query ListScraps(
    $filter: ModelScrapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScraps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fl_forclosures
        md_forclosures
      }
      nextToken
    }
  }
`;
