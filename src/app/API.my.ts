import {
  OnCreateMessageSubscription,
  OnCreateInvitedRoomSubscription,
  OnCreateRoomUserSubscription,
  GetRoomQuery,
  APIService,
  GetApplicantQuery,
  GetCompanyQuery,
  ListApplicantsQuery,
  ModelApplicantFilterInput,
  GetArticleQuery
} from "./API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import * as Observable from "zen-observable";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyAPIService extends APIService {
  constructor() {
    super();
  }

  async MyGetArticle(id: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!) {
        getArticle(id: $id) {
          __typename
          id
          title
          tags {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          company {
            __typename
            id
            name
            email
            logo
            backgroundImg
            about
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            owner {
              __typename
              id
              username
              displayName
              logo
              user_role
              createdAt
              updatedAt
            }
            articles {
              __typename
              nextToken
            }
            workTypes {
              __typename
              nextToken
            }
            styleTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          isOpen
          comments {
            __typename
            items {
              __typename
              id
              content
              user {
                __typename
                id
                username
                displayName
                logo
                user_role
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          area {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArticleQuery>response.data.getArticle;
  }

  async GetApplicant(id: string): Promise<GetApplicantQuery> {
    const statement = `query GetApplicant($id: ID!) {
        getApplicant(id: $id) {
          __typename
          id
          user {
            __typename
            id
            username
            displayName
            logo
            user_role
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          name
          email
          firstName
          lastName
          area {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          logo
          backgroundImg
          about
          characters {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApplicantQuery>response.data.getApplicant;
  }

  async MyGetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          email
          logo
          backgroundImg
          about
          area {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            displayName
            logo
            user_role
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          articles {
            __typename
            items {
              __typename
              id
              title
              thumbnail
              content
              isOpen
              createdAt
              updatedAt
            }
            nextToken
          }
          workTypes {
            __typename
            items {
              __typename
              id
              workType {
                __typename
                id
                content
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          styleTypes {
            __typename
            items {
              __typename
              id
              styleType {
                __typename
                id
                content
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }

  async MyListApplicants(
    filter?: ModelApplicantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApplicantsQuery> {
    const statement = `query ListApplicants($filter: ModelApplicantFilterInput, $limit: Int, $nextToken: String) {
        listApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user {
              __typename
              id
              username
              displayName
              logo
              user_role
              createdAt
              updatedAt
            }
            name
            email
            firstName
            lastName
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            logo
            backgroundImg
            about
            characters {
              __typename
              items {
              __typename
              id
              character
              {
                __typename
              id
              content
              }
              createdAt
              updatedAt
            }
              nextToken
            }
            skills {
              __typename
               items {
              __typename
              id
              skill
              {
                __typename
              id
              content
              }
              createdAt
              updatedAt
            }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApplicantsQuery>response.data.listApplicants;
  }

  async MyGetApplicant(id: string): Promise<GetApplicantQuery> {
    const statement = `query GetApplicant($id: ID!) {
        getApplicant(id: $id) {
          __typename
          id
          user {
            __typename
            id
            username
            displayName
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          name
          email
          firstName
          lastName
          area {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          logo
          backgroundImg
          about
          characters {
            __typename
            items {
              __typename
              id
              character
              {
                __typename
              id
              content
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          skills {
            __typename
            items {
              __typename
              id
              skill
              {
                __typename
              id
              content
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApplicantQuery>response.data.getApplicant;
  }

  async MyGetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          image
          owner
          user {
            __typename
            id
            username
            displayName
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          inviting {
            __typename
            items {
              __typename
              id
              toUsername
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              username
              user {
                __typename
                id
                username
                displayName
                logo
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
              user {
                __typename
                id
                username
                displayName
                logo
              }
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }

  MyOnCreateRoomUserListener(
    username: string
  ): Observable<OnCreateRoomUserSubscription> {
    const statement = `subscription OnCreateRoomUser($username: String!) {
        onCreateRoomUser(username: $username) {
          __typename
          id
          username
          room {
            __typename
            id
            name
            image
            owner
            user {
              __typename
              id
              username
              displayName
              logo
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            messages {
              __typename
              nextToken
            }
          }
          user {
            __typename
            id
            username
            displayName
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateRoomUserSubscription>;
  }

  MyOnCreateMessageListener(
    roomId: string
  ): Observable<OnCreateMessageSubscription> {
    const statement = `subscription OnCreateMessage($roomId: ID!) {
        onCreateMessage(roomId: $roomId) {
          __typename
          id
          content
          when
          roomId
          owner
          user {
            __typename
            id
            username
            displayName
            logo
          }
          room {
            __typename
            id
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      roomId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateMessageSubscription>;
  }

  MyOnCreateInvitedRoomListener(
    toUsername: string
  ): Observable<OnCreateInvitedRoomSubscription> {
    const statement = `subscription OnCreateInvitedRoom($toUsername: String!) {
        onCreateInvitedRoom(toUsername: $toUsername) {
          __typename
          id
          room {
            __typename
            id
            name
            image
            owner
            user {
              __typename
              id
              username
              displayName
              logo
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            messages {
              __typename
              nextToken
            }
          }
          toUser {
            __typename
            id
            username
            displayName
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          toUsername
          fromUser {
            __typename
            id
            username
            displayName
            logo
            invitedRooms {
              __typename
              nextToken
            }
            joinedRooms {
              __typename
              nextToken
            }
            ownedRooms {
              __typename
              nextToken
            }
          }
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      toUsername
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<OnCreateInvitedRoomSubscription>;
  }
}
