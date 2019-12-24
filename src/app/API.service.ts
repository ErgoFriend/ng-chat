/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCompanyInput = {
  id: string;
  name: string;
  email?: string | null;
  logo?: string | null;
  backgroundImg?: string | null;
  about?: string | null;
  duplicateFlag?: boolean | null;
  createdAt: number;
  updatedAt: number;
  companyAreaId?: string | null;
  companyOwnerId: string;
};

export enum ArticleStatus {
  open = "open",
  close = "close"
}

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  logo?: string | null;
  backgroundImg?: string | null;
  about?: string | null;
  duplicateFlag?: boolean | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  companyAreaId?: string | null;
  companyOwnerId?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateArticleTagInput = {
  id: string;
  createdAt: number;
  updatedAt: number;
  articleTagArticleId: string;
  articleTagArticleTagMasterId: string;
};

export type UpdateArticleTagInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  articleTagArticleId?: string | null;
  articleTagArticleTagMasterId?: string | null;
};

export type DeleteArticleTagInput = {
  id: string;
};

export type CreateArticleTagMasterInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateArticleTagMasterInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteArticleTagMasterInput = {
  id: string;
};

export type CreateArticleInput = {
  id: string;
  title: string;
  thumbnail?: string | null;
  content: string;
  isOpen: ArticleStatus;
  createdAt: number;
  updatedAt: number;
  articleCompanyId: string;
  articleAreaId: string;
};

export type UpdateArticleInput = {
  id: string;
  title?: string | null;
  thumbnail?: string | null;
  content?: string | null;
  isOpen?: ArticleStatus | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  articleCompanyId?: string | null;
  articleAreaId?: string | null;
};

export type DeleteArticleInput = {
  id: string;
};

export type CreateCommentInput = {
  id: string;
  content?: string | null;
  createdAt: number;
  updatedAt: number;
  commentUserId: string;
  commentArticleId?: string | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  commentUserId?: string | null;
  commentArticleId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type CreateWorkTypeInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateWorkTypeInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteWorkTypeInput = {
  id: string;
};

export type CreateStyleTypeInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateStyleTypeInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteStyleTypeInput = {
  id: string;
};

export type CreateCompanyWorkTypeInput = {
  id: string;
  createdAt: number;
  updatedAt: number;
  companyWorkTypeWorkTypeId: string;
  companyWorkTypeCompanyId: string;
};

export type UpdateCompanyWorkTypeInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  companyWorkTypeWorkTypeId?: string | null;
  companyWorkTypeCompanyId?: string | null;
};

export type DeleteCompanyWorkTypeInput = {
  id: string;
};

export type CreateCompanyStyleTypeInput = {
  id: string;
  createdAt: number;
  updatedAt: number;
  companyStyleTypeStyleTypeId: string;
  companyStyleTypeCompanyId: string;
};

export type UpdateCompanyStyleTypeInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  companyStyleTypeStyleTypeId?: string | null;
  companyStyleTypeCompanyId?: string | null;
};

export type DeleteCompanyStyleTypeInput = {
  id: string;
};

export type CreateCharacterInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateCharacterInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteCharacterInput = {
  id: string;
};

export type CreateSkillInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateSkillInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteSkillInput = {
  id: string;
};

export type CreateApplicantCharacterInput = {
  id: string;
  createdAt: number;
  updatedAt: number;
  applicantCharacterCharacterId: string;
  applicantCharacterApplicantId: string;
};

export type UpdateApplicantCharacterInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  applicantCharacterCharacterId?: string | null;
  applicantCharacterApplicantId?: string | null;
};

export type DeleteApplicantCharacterInput = {
  id: string;
};

export type CreateApplicantSkillInput = {
  id: string;
  createdAt: number;
  updatedAt: number;
  applicantSkillApplicantId: string;
  applicantSkillSkillId: string;
};

export type UpdateApplicantSkillInput = {
  id: string;
  createdAt?: number | null;
  updatedAt?: number | null;
  applicantSkillApplicantId?: string | null;
  applicantSkillSkillId?: string | null;
};

export type DeleteApplicantSkillInput = {
  id: string;
};

export type CreateAreaInput = {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateAreaInput = {
  id: string;
  content?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteAreaInput = {
  id: string;
};

export type CreateUserInput = {
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  createdAt: number;
  updatedAt: number;
};

export enum invitedStatus {
  hold = "hold",
  accepted = "accepted",
  canceled = "canceled"
}

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  displayName?: string | null;
  logo?: string | null;
  user_role?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateApplicantInput = {
  id?: string | null;
  name: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  logo?: string | null;
  backgroundImg?: string | null;
  about?: string | null;
  createdAt: number;
  updatedAt: number;
  applicantUserId: string;
  applicantAreaId?: string | null;
};

export type UpdateApplicantInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  logo?: string | null;
  backgroundImg?: string | null;
  about?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  applicantUserId?: string | null;
  applicantAreaId?: string | null;
};

export type DeleteApplicantInput = {
  id?: string | null;
};

export type CreateInvitedRoomInput = {
  id: string;
  toUsername: string;
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
  invitedRoomRoomId: string;
  invitedRoomToUserId: string;
  invitedRoomFromUserId: string;
};

export type UpdateInvitedRoomInput = {
  id: string;
  toUsername?: string | null;
  status?: invitedStatus | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  invitedRoomRoomId?: string | null;
  invitedRoomToUserId?: string | null;
  invitedRoomFromUserId?: string | null;
};

export type DeleteInvitedRoomInput = {
  id: string;
};

export type CreateRoomInput = {
  id: string;
  name: string;
  image: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  roomUserId: string;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  image?: string | null;
  owner?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  roomUserId?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  messageUserId: string;
  messageRoomId: string;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  when?: string | null;
  roomId?: string | null;
  owner?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  messageUserId?: string | null;
  messageRoomId?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateRoomUserInput = {
  id: string;
  username: string;
  createdAt: number;
  updatedAt: number;
  roomUserRoomId: string;
  roomUserUserId: string;
};

export type UpdateRoomUserInput = {
  id: string;
  username?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  roomUserRoomId?: string | null;
  roomUserUserId?: string | null;
};

export type DeleteRoomUserInput = {
  id: string;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  logo?: ModelStringFilterInput | null;
  backgroundImg?: ModelStringFilterInput | null;
  about?: ModelStringFilterInput | null;
  duplicateFlag?: ModelBooleanFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelArticleTagFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelArticleTagFilterInput | null> | null;
  or?: Array<ModelArticleTagFilterInput | null> | null;
  not?: ModelArticleTagFilterInput | null;
};

export type ModelArticleTagMasterFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelArticleTagMasterFilterInput | null> | null;
  or?: Array<ModelArticleTagMasterFilterInput | null> | null;
  not?: ModelArticleTagMasterFilterInput | null;
};

export type ModelArticleFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  thumbnail?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  isOpen?: ModelArticleStatusFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelArticleFilterInput | null> | null;
  or?: Array<ModelArticleFilterInput | null> | null;
  not?: ModelArticleFilterInput | null;
};

export type ModelArticleStatusFilterInput = {
  eq?: ArticleStatus | null;
  ne?: ArticleStatus | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelWorkTypeFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelWorkTypeFilterInput | null> | null;
  or?: Array<ModelWorkTypeFilterInput | null> | null;
  not?: ModelWorkTypeFilterInput | null;
};

export type ModelStyleTypeFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelStyleTypeFilterInput | null> | null;
  or?: Array<ModelStyleTypeFilterInput | null> | null;
  not?: ModelStyleTypeFilterInput | null;
};

export type ModelCompanyWorkTypeFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCompanyWorkTypeFilterInput | null> | null;
  or?: Array<ModelCompanyWorkTypeFilterInput | null> | null;
  not?: ModelCompanyWorkTypeFilterInput | null;
};

export type ModelCompanyStyleTypeFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCompanyStyleTypeFilterInput | null> | null;
  or?: Array<ModelCompanyStyleTypeFilterInput | null> | null;
  not?: ModelCompanyStyleTypeFilterInput | null;
};

export type ModelCharacterFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelCharacterFilterInput | null> | null;
  or?: Array<ModelCharacterFilterInput | null> | null;
  not?: ModelCharacterFilterInput | null;
};

export type ModelSkillFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelSkillFilterInput | null> | null;
  or?: Array<ModelSkillFilterInput | null> | null;
  not?: ModelSkillFilterInput | null;
};

export type ModelApplicantCharacterFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelApplicantCharacterFilterInput | null> | null;
  or?: Array<ModelApplicantCharacterFilterInput | null> | null;
  not?: ModelApplicantCharacterFilterInput | null;
};

export type ModelApplicantSkillFilterInput = {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelApplicantSkillFilterInput | null> | null;
  or?: Array<ModelApplicantSkillFilterInput | null> | null;
  not?: ModelApplicantSkillFilterInput | null;
};

export type ModelAreaFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelAreaFilterInput | null> | null;
  or?: Array<ModelAreaFilterInput | null> | null;
  not?: ModelAreaFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  displayName?: ModelStringFilterInput | null;
  logo?: ModelStringFilterInput | null;
  user_role?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelApplicantFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  logo?: ModelStringFilterInput | null;
  backgroundImg?: ModelStringFilterInput | null;
  about?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelApplicantFilterInput | null> | null;
  or?: Array<ModelApplicantFilterInput | null> | null;
  not?: ModelApplicantFilterInput | null;
};

export type ModelInvitedRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  toUsername?: ModelStringFilterInput | null;
  status?: ModelinvitedStatusFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelInvitedRoomFilterInput | null> | null;
  or?: Array<ModelInvitedRoomFilterInput | null> | null;
  not?: ModelInvitedRoomFilterInput | null;
};

export type ModelinvitedStatusFilterInput = {
  eq?: invitedStatus | null;
  ne?: invitedStatus | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  when?: ModelStringFilterInput | null;
  roomId?: ModelIDFilterInput | null;
  owner?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelRoomUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  createdAt?: ModelIntFilterInput | null;
  updatedAt?: ModelIntFilterInput | null;
  and?: Array<ModelRoomUserFilterInput | null> | null;
  or?: Array<ModelRoomUserFilterInput | null> | null;
  not?: ModelRoomUserFilterInput | null;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateArticleTagMutation = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateArticleTagMutation = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteArticleTagMutation = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateArticleTagMasterMutation = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateArticleTagMasterMutation = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteArticleTagMasterMutation = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateArticleMutation = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateArticleMutation = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteArticleMutation = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateWorkTypeMutation = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateWorkTypeMutation = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteWorkTypeMutation = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateStyleTypeMutation = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateStyleTypeMutation = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteStyleTypeMutation = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateCompanyWorkTypeMutation = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateCompanyWorkTypeMutation = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteCompanyWorkTypeMutation = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateCompanyStyleTypeMutation = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateCompanyStyleTypeMutation = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteCompanyStyleTypeMutation = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateCharacterMutation = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateCharacterMutation = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteCharacterMutation = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateSkillMutation = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateSkillMutation = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteSkillMutation = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateApplicantCharacterMutation = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateApplicantCharacterMutation = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteApplicantCharacterMutation = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateApplicantSkillMutation = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateApplicantSkillMutation = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteApplicantSkillMutation = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateAreaMutation = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateAreaMutation = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteAreaMutation = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateApplicantMutation = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateApplicantMutation = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteApplicantMutation = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type UpdateInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type DeleteInvitedRoomMutation = {
  __typename: "InvitedRoom";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type CreateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type UpdateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type DeleteRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetArticleTagQuery = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListArticleTagsQuery = {
  __typename: "ModelArticleTagConnection";
  items: Array<{
    __typename: "ArticleTag";
    id: string;
    article: {
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    };
    articleTagMaster: {
      __typename: "ArticleTagMaster";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetArticleTagMasterQuery = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListArticleTagMastersQuery = {
  __typename: "ModelArticleTagMasterConnection";
  items: Array<{
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetArticleQuery = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListArticlesQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content: string | null;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    article: {
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetWorkTypeQuery = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListWorkTypesQuery = {
  __typename: "ModelWorkTypeConnection";
  items: Array<{
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetStyleTypeQuery = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListStyleTypesQuery = {
  __typename: "ModelStyleTypeConnection";
  items: Array<{
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetCompanyWorkTypeQuery = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListCompanyWorkTypesQuery = {
  __typename: "ModelCompanyWorkTypeConnection";
  items: Array<{
    __typename: "CompanyWorkType";
    id: string;
    workType: {
      __typename: "WorkType";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetCompanyStyleTypeQuery = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListCompanyStyleTypesQuery = {
  __typename: "ModelCompanyStyleTypeConnection";
  items: Array<{
    __typename: "CompanyStyleType";
    id: string;
    styleType: {
      __typename: "StyleType";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetCharacterQuery = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListCharactersQuery = {
  __typename: "ModelCharacterConnection";
  items: Array<{
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetSkillQuery = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListSkillsQuery = {
  __typename: "ModelSkillConnection";
  items: Array<{
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetApplicantCharacterQuery = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListApplicantCharactersQuery = {
  __typename: "ModelApplicantCharacterConnection";
  items: Array<{
    __typename: "ApplicantCharacter";
    id: string;
    character: {
      __typename: "Character";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    applicant: {
      __typename: "Applicant";
      id: string;
      name: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetApplicantSkillQuery = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListApplicantSkillsQuery = {
  __typename: "ModelApplicantSkillConnection";
  items: Array<{
    __typename: "ApplicantSkill";
    id: string;
    applicant: {
      __typename: "Applicant";
      id: string;
      name: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      createdAt: number;
      updatedAt: number;
    };
    skill: {
      __typename: "Skill";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetAreaQuery = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListAreasQuery = {
  __typename: "ModelAreaConnection";
  items: Array<{
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetApplicantQuery = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListApplicantsQuery = {
  __typename: "ModelApplicantConnection";
  items: Array<{
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetInvitedRoomQuery = {
  __typename: "InvitedRoom";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type ListInvitedRoomsQuery = {
  __typename: "ModelInvitedRoomConnection";
  items: Array<{
    __typename: "InvitedRoom";
    id: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
    toUser: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    toUsername: string;
    fromUser: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    status: invitedStatus;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    when: string;
    roomId: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomUserQuery = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type ListRoomUsersQuery = {
  __typename: "ModelRoomUserConnection";
  items: Array<{
    __typename: "RoomUser";
    id: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    };
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    username: string;
    createdAt: number;
    updatedAt: number;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  when: string;
  roomId: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateInvitedRoomSubscription = {
  __typename: "InvitedRoom";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  toUsername: string;
  fromUser: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  status: invitedStatus;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    image: string;
    owner: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    inviting: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    users: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  username: string;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  email: string | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  owner: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  duplicateFlag: boolean | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  workTypes: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  styleTypes: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateArticleTagSubscription = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateArticleTagSubscription = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteArticleTagSubscription = {
  __typename: "ArticleTag";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  };
  articleTagMaster: {
    __typename: "ArticleTagMaster";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateArticleTagMasterSubscription = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateArticleTagMasterSubscription = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteArticleTagMasterSubscription = {
  __typename: "ArticleTagMaster";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateArticleSubscription = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateArticleSubscription = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteArticleSubscription = {
  __typename: "Article";
  id: string;
  title: string;
  tags: {
    __typename: "ModelArticleTagConnection";
    items: Array<{
      __typename: "ArticleTag";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  content: string;
  isOpen: ArticleStatus;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  article: {
    __typename: "Article";
    id: string;
    title: string;
    tags: {
      __typename: "ModelArticleTagConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    };
    content: string;
    isOpen: ArticleStatus;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    };
    createdAt: number;
    updatedAt: number;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateWorkTypeSubscription = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateWorkTypeSubscription = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteWorkTypeSubscription = {
  __typename: "WorkType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyWorkTypeConnection";
    items: Array<{
      __typename: "CompanyWorkType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateStyleTypeSubscription = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateStyleTypeSubscription = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteStyleTypeSubscription = {
  __typename: "StyleType";
  id: string;
  content: string;
  companies: {
    __typename: "ModelCompanyStyleTypeConnection";
    items: Array<{
      __typename: "CompanyStyleType";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCompanyWorkTypeSubscription = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCompanyWorkTypeSubscription = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCompanyWorkTypeSubscription = {
  __typename: "CompanyWorkType";
  id: string;
  workType: {
    __typename: "WorkType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCompanyStyleTypeSubscription = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCompanyStyleTypeSubscription = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCompanyStyleTypeSubscription = {
  __typename: "CompanyStyleType";
  id: string;
  styleType: {
    __typename: "StyleType";
    id: string;
    content: string;
    companies: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  company: {
    __typename: "Company";
    id: string;
    name: string;
    email: string | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    owner: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    duplicateFlag: boolean | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    workTypes: {
      __typename: "ModelCompanyWorkTypeConnection";
      nextToken: string | null;
    } | null;
    styleTypes: {
      __typename: "ModelCompanyStyleTypeConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateCharacterSubscription = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateCharacterSubscription = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteCharacterSubscription = {
  __typename: "Character";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateSkillSubscription = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateSkillSubscription = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteSkillSubscription = {
  __typename: "Skill";
  id: string;
  content: string;
  applicants: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateApplicantCharacterSubscription = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateApplicantCharacterSubscription = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteApplicantCharacterSubscription = {
  __typename: "ApplicantCharacter";
  id: string;
  character: {
    __typename: "Character";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateApplicantSkillSubscription = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateApplicantSkillSubscription = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteApplicantSkillSubscription = {
  __typename: "ApplicantSkill";
  id: string;
  applicant: {
    __typename: "Applicant";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      displayName: string;
      logo: string;
      user_role: string;
      createdAt: number;
      updatedAt: number;
    };
    name: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    area: {
      __typename: "Area";
      id: string;
      content: string;
      createdAt: number;
      updatedAt: number;
    } | null;
    logo: string | null;
    backgroundImg: string | null;
    about: string | null;
    characters: {
      __typename: "ModelApplicantCharacterConnection";
      nextToken: string | null;
    } | null;
    skills: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  skill: {
    __typename: "Skill";
    id: string;
    content: string;
    applicants: {
      __typename: "ModelApplicantSkillConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  createdAt: number;
  updatedAt: number;
};

export type OnCreateAreaSubscription = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateAreaSubscription = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteAreaSubscription = {
  __typename: "Area";
  id: string;
  content: string;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      title: string;
      thumbnail: string | null;
      content: string;
      isOpen: ArticleStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companies: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      email: string | null;
      logo: string | null;
      backgroundImg: string | null;
      about: string | null;
      duplicateFlag: boolean | null;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  displayName: string;
  logo: string;
  user_role: string;
  invitedRooms: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  joinedRooms: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownedRooms: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      name: string;
      image: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateApplicantSubscription = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateApplicantSubscription = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteApplicantSubscription = {
  __typename: "Applicant";
  id: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  name: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  area: {
    __typename: "Area";
    id: string;
    content: string;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    companies: {
      __typename: "ModelCompanyConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  } | null;
  logo: string | null;
  backgroundImg: string | null;
  about: string | null;
  characters: {
    __typename: "ModelApplicantCharacterConnection";
    items: Array<{
      __typename: "ApplicantCharacter";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  skills: {
    __typename: "ModelApplicantSkillConnection";
    items: Array<{
      __typename: "ApplicantSkill";
      id: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  image: string;
  owner: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    displayName: string;
    logo: string;
    user_role: string;
    invitedRooms: {
      __typename: "ModelInvitedRoomConnection";
      nextToken: string | null;
    } | null;
    joinedRooms: {
      __typename: "ModelRoomUserConnection";
      nextToken: string | null;
    } | null;
    ownedRooms: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    createdAt: number;
    updatedAt: number;
  };
  inviting: {
    __typename: "ModelInvitedRoomConnection";
    items: Array<{
      __typename: "InvitedRoom";
      id: string;
      toUsername: string;
      status: invitedStatus;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelRoomUserConnection";
    items: Array<{
      __typename: "RoomUser";
      id: string;
      username: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      when: string;
      roomId: string;
      owner: string;
      createdAt: number;
      updatedAt: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number;
  updatedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCompany(
    input: CreateCompanyInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!) {
        createCompany(input: $input) {
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
          duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!) {
        updateCompany(input: $input) {
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
          duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!) {
        deleteCompany(input: $input) {
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
          duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateArticleTag(
    input: CreateArticleTagInput
  ): Promise<CreateArticleTagMutation> {
    const statement = `mutation CreateArticleTag($input: CreateArticleTagInput!) {
        createArticleTag(input: $input) {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateArticleTagMutation>response.data.createArticleTag;
  }
  async UpdateArticleTag(
    input: UpdateArticleTagInput
  ): Promise<UpdateArticleTagMutation> {
    const statement = `mutation UpdateArticleTag($input: UpdateArticleTagInput!) {
        updateArticleTag(input: $input) {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateArticleTagMutation>response.data.updateArticleTag;
  }
  async DeleteArticleTag(
    input: DeleteArticleTagInput
  ): Promise<DeleteArticleTagMutation> {
    const statement = `mutation DeleteArticleTag($input: DeleteArticleTagInput!) {
        deleteArticleTag(input: $input) {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteArticleTagMutation>response.data.deleteArticleTag;
  }
  async CreateArticleTagMaster(
    input: CreateArticleTagMasterInput
  ): Promise<CreateArticleTagMasterMutation> {
    const statement = `mutation CreateArticleTagMaster($input: CreateArticleTagMasterInput!) {
        createArticleTagMaster(input: $input) {
          __typename
          id
          content
          articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateArticleTagMasterMutation>response.data.createArticleTagMaster;
  }
  async UpdateArticleTagMaster(
    input: UpdateArticleTagMasterInput
  ): Promise<UpdateArticleTagMasterMutation> {
    const statement = `mutation UpdateArticleTagMaster($input: UpdateArticleTagMasterInput!) {
        updateArticleTagMaster(input: $input) {
          __typename
          id
          content
          articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateArticleTagMasterMutation>response.data.updateArticleTagMaster;
  }
  async DeleteArticleTagMaster(
    input: DeleteArticleTagMasterInput
  ): Promise<DeleteArticleTagMasterMutation> {
    const statement = `mutation DeleteArticleTagMaster($input: DeleteArticleTagMasterInput!) {
        deleteArticleTagMaster(input: $input) {
          __typename
          id
          content
          articles {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteArticleTagMasterMutation>response.data.deleteArticleTagMaster;
  }
  async CreateArticle(
    input: CreateArticleInput
  ): Promise<CreateArticleMutation> {
    const statement = `mutation CreateArticle($input: CreateArticleInput!) {
        createArticle(input: $input) {
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
            duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateArticleMutation>response.data.createArticle;
  }
  async UpdateArticle(
    input: UpdateArticleInput
  ): Promise<UpdateArticleMutation> {
    const statement = `mutation UpdateArticle($input: UpdateArticleInput!) {
        updateArticle(input: $input) {
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
            duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateArticleMutation>response.data.updateArticle;
  }
  async DeleteArticle(
    input: DeleteArticleInput
  ): Promise<DeleteArticleMutation> {
    const statement = `mutation DeleteArticle($input: DeleteArticleInput!) {
        deleteArticle(input: $input) {
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
            duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteArticleMutation>response.data.deleteArticle;
  }
  async CreateComment(
    input: CreateCommentInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!) {
        updateComment(input: $input) {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!) {
        deleteComment(input: $input) {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateWorkType(
    input: CreateWorkTypeInput
  ): Promise<CreateWorkTypeMutation> {
    const statement = `mutation CreateWorkType($input: CreateWorkTypeInput!) {
        createWorkType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkTypeMutation>response.data.createWorkType;
  }
  async UpdateWorkType(
    input: UpdateWorkTypeInput
  ): Promise<UpdateWorkTypeMutation> {
    const statement = `mutation UpdateWorkType($input: UpdateWorkTypeInput!) {
        updateWorkType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkTypeMutation>response.data.updateWorkType;
  }
  async DeleteWorkType(
    input: DeleteWorkTypeInput
  ): Promise<DeleteWorkTypeMutation> {
    const statement = `mutation DeleteWorkType($input: DeleteWorkTypeInput!) {
        deleteWorkType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkTypeMutation>response.data.deleteWorkType;
  }
  async CreateStyleType(
    input: CreateStyleTypeInput
  ): Promise<CreateStyleTypeMutation> {
    const statement = `mutation CreateStyleType($input: CreateStyleTypeInput!) {
        createStyleType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStyleTypeMutation>response.data.createStyleType;
  }
  async UpdateStyleType(
    input: UpdateStyleTypeInput
  ): Promise<UpdateStyleTypeMutation> {
    const statement = `mutation UpdateStyleType($input: UpdateStyleTypeInput!) {
        updateStyleType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStyleTypeMutation>response.data.updateStyleType;
  }
  async DeleteStyleType(
    input: DeleteStyleTypeInput
  ): Promise<DeleteStyleTypeMutation> {
    const statement = `mutation DeleteStyleType($input: DeleteStyleTypeInput!) {
        deleteStyleType(input: $input) {
          __typename
          id
          content
          companies {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStyleTypeMutation>response.data.deleteStyleType;
  }
  async CreateCompanyWorkType(
    input: CreateCompanyWorkTypeInput
  ): Promise<CreateCompanyWorkTypeMutation> {
    const statement = `mutation CreateCompanyWorkType($input: CreateCompanyWorkTypeInput!) {
        createCompanyWorkType(input: $input) {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyWorkTypeMutation>response.data.createCompanyWorkType;
  }
  async UpdateCompanyWorkType(
    input: UpdateCompanyWorkTypeInput
  ): Promise<UpdateCompanyWorkTypeMutation> {
    const statement = `mutation UpdateCompanyWorkType($input: UpdateCompanyWorkTypeInput!) {
        updateCompanyWorkType(input: $input) {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyWorkTypeMutation>response.data.updateCompanyWorkType;
  }
  async DeleteCompanyWorkType(
    input: DeleteCompanyWorkTypeInput
  ): Promise<DeleteCompanyWorkTypeMutation> {
    const statement = `mutation DeleteCompanyWorkType($input: DeleteCompanyWorkTypeInput!) {
        deleteCompanyWorkType(input: $input) {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyWorkTypeMutation>response.data.deleteCompanyWorkType;
  }
  async CreateCompanyStyleType(
    input: CreateCompanyStyleTypeInput
  ): Promise<CreateCompanyStyleTypeMutation> {
    const statement = `mutation CreateCompanyStyleType($input: CreateCompanyStyleTypeInput!) {
        createCompanyStyleType(input: $input) {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyStyleTypeMutation>response.data.createCompanyStyleType;
  }
  async UpdateCompanyStyleType(
    input: UpdateCompanyStyleTypeInput
  ): Promise<UpdateCompanyStyleTypeMutation> {
    const statement = `mutation UpdateCompanyStyleType($input: UpdateCompanyStyleTypeInput!) {
        updateCompanyStyleType(input: $input) {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyStyleTypeMutation>response.data.updateCompanyStyleType;
  }
  async DeleteCompanyStyleType(
    input: DeleteCompanyStyleTypeInput
  ): Promise<DeleteCompanyStyleTypeMutation> {
    const statement = `mutation DeleteCompanyStyleType($input: DeleteCompanyStyleTypeInput!) {
        deleteCompanyStyleType(input: $input) {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyStyleTypeMutation>response.data.deleteCompanyStyleType;
  }
  async CreateCharacter(
    input: CreateCharacterInput
  ): Promise<CreateCharacterMutation> {
    const statement = `mutation CreateCharacter($input: CreateCharacterInput!) {
        createCharacter(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCharacterMutation>response.data.createCharacter;
  }
  async UpdateCharacter(
    input: UpdateCharacterInput
  ): Promise<UpdateCharacterMutation> {
    const statement = `mutation UpdateCharacter($input: UpdateCharacterInput!) {
        updateCharacter(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCharacterMutation>response.data.updateCharacter;
  }
  async DeleteCharacter(
    input: DeleteCharacterInput
  ): Promise<DeleteCharacterMutation> {
    const statement = `mutation DeleteCharacter($input: DeleteCharacterInput!) {
        deleteCharacter(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCharacterMutation>response.data.deleteCharacter;
  }
  async CreateSkill(input: CreateSkillInput): Promise<CreateSkillMutation> {
    const statement = `mutation CreateSkill($input: CreateSkillInput!) {
        createSkill(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSkillMutation>response.data.createSkill;
  }
  async UpdateSkill(input: UpdateSkillInput): Promise<UpdateSkillMutation> {
    const statement = `mutation UpdateSkill($input: UpdateSkillInput!) {
        updateSkill(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSkillMutation>response.data.updateSkill;
  }
  async DeleteSkill(input: DeleteSkillInput): Promise<DeleteSkillMutation> {
    const statement = `mutation DeleteSkill($input: DeleteSkillInput!) {
        deleteSkill(input: $input) {
          __typename
          id
          content
          applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSkillMutation>response.data.deleteSkill;
  }
  async CreateApplicantCharacter(
    input: CreateApplicantCharacterInput
  ): Promise<CreateApplicantCharacterMutation> {
    const statement = `mutation CreateApplicantCharacter($input: CreateApplicantCharacterInput!) {
        createApplicantCharacter(input: $input) {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApplicantCharacterMutation>(
      response.data.createApplicantCharacter
    );
  }
  async UpdateApplicantCharacter(
    input: UpdateApplicantCharacterInput
  ): Promise<UpdateApplicantCharacterMutation> {
    const statement = `mutation UpdateApplicantCharacter($input: UpdateApplicantCharacterInput!) {
        updateApplicantCharacter(input: $input) {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApplicantCharacterMutation>(
      response.data.updateApplicantCharacter
    );
  }
  async DeleteApplicantCharacter(
    input: DeleteApplicantCharacterInput
  ): Promise<DeleteApplicantCharacterMutation> {
    const statement = `mutation DeleteApplicantCharacter($input: DeleteApplicantCharacterInput!) {
        deleteApplicantCharacter(input: $input) {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApplicantCharacterMutation>(
      response.data.deleteApplicantCharacter
    );
  }
  async CreateApplicantSkill(
    input: CreateApplicantSkillInput
  ): Promise<CreateApplicantSkillMutation> {
    const statement = `mutation CreateApplicantSkill($input: CreateApplicantSkillInput!) {
        createApplicantSkill(input: $input) {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApplicantSkillMutation>response.data.createApplicantSkill;
  }
  async UpdateApplicantSkill(
    input: UpdateApplicantSkillInput
  ): Promise<UpdateApplicantSkillMutation> {
    const statement = `mutation UpdateApplicantSkill($input: UpdateApplicantSkillInput!) {
        updateApplicantSkill(input: $input) {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApplicantSkillMutation>response.data.updateApplicantSkill;
  }
  async DeleteApplicantSkill(
    input: DeleteApplicantSkillInput
  ): Promise<DeleteApplicantSkillMutation> {
    const statement = `mutation DeleteApplicantSkill($input: DeleteApplicantSkillInput!) {
        deleteApplicantSkill(input: $input) {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApplicantSkillMutation>response.data.deleteApplicantSkill;
  }
  async CreateArea(input: CreateAreaInput): Promise<CreateAreaMutation> {
    const statement = `mutation CreateArea($input: CreateAreaInput!) {
        createArea(input: $input) {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAreaMutation>response.data.createArea;
  }
  async UpdateArea(input: UpdateAreaInput): Promise<UpdateAreaMutation> {
    const statement = `mutation UpdateArea($input: UpdateAreaInput!) {
        updateArea(input: $input) {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAreaMutation>response.data.updateArea;
  }
  async DeleteArea(input: DeleteAreaInput): Promise<DeleteAreaMutation> {
    const statement = `mutation DeleteArea($input: DeleteAreaInput!) {
        deleteArea(input: $input) {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAreaMutation>response.data.deleteArea;
  }
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateApplicant(
    input: CreateApplicantInput
  ): Promise<CreateApplicantMutation> {
    const statement = `mutation CreateApplicant($input: CreateApplicantInput!) {
        createApplicant(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApplicantMutation>response.data.createApplicant;
  }
  async UpdateApplicant(
    input: UpdateApplicantInput
  ): Promise<UpdateApplicantMutation> {
    const statement = `mutation UpdateApplicant($input: UpdateApplicantInput!) {
        updateApplicant(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApplicantMutation>response.data.updateApplicant;
  }
  async DeleteApplicant(
    input: DeleteApplicantInput
  ): Promise<DeleteApplicantMutation> {
    const statement = `mutation DeleteApplicant($input: DeleteApplicantInput!) {
        deleteApplicant(input: $input) {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApplicantMutation>response.data.deleteApplicant;
  }
  async CreateInvitedRoom(
    input: CreateInvitedRoomInput
  ): Promise<CreateInvitedRoomMutation> {
    const statement = `mutation CreateInvitedRoom($input: CreateInvitedRoomInput!) {
        createInvitedRoom(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          toUser {
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
          toUsername
          fromUser {
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
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInvitedRoomMutation>response.data.createInvitedRoom;
  }
  async UpdateInvitedRoom(
    input: UpdateInvitedRoomInput
  ): Promise<UpdateInvitedRoomMutation> {
    const statement = `mutation UpdateInvitedRoom($input: UpdateInvitedRoomInput!) {
        updateInvitedRoom(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          toUser {
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
          toUsername
          fromUser {
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
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInvitedRoomMutation>response.data.updateInvitedRoom;
  }
  async DeleteInvitedRoom(
    input: DeleteInvitedRoomInput
  ): Promise<DeleteInvitedRoomMutation> {
    const statement = `mutation DeleteInvitedRoom($input: DeleteInvitedRoomInput!) {
        deleteInvitedRoom(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          toUser {
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
          toUsername
          fromUser {
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
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInvitedRoomMutation>response.data.deleteInvitedRoom;
  }
  async CreateRoom(input: CreateRoomInput): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!) {
        createRoom(input: $input) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(input: UpdateRoomInput): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!) {
        updateRoom(input: $input) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(input: DeleteRoomInput): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!) {
        deleteRoom(input: $input) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateMessage(
    input: CreateMessageInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!) {
        createMessage(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!) {
        updateMessage(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!) {
        deleteMessage(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
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
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateRoomUser(
    input: CreateRoomUserInput
  ): Promise<CreateRoomUserMutation> {
    const statement = `mutation CreateRoomUser($input: CreateRoomUserInput!) {
        createRoomUser(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomUserMutation>response.data.createRoomUser;
  }
  async UpdateRoomUser(
    input: UpdateRoomUserInput
  ): Promise<UpdateRoomUserMutation> {
    const statement = `mutation UpdateRoomUser($input: UpdateRoomUserInput!) {
        updateRoomUser(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomUserMutation>response.data.updateRoomUser;
  }
  async DeleteRoomUser(
    input: DeleteRoomUserInput
  ): Promise<DeleteRoomUserMutation> {
    const statement = `mutation DeleteRoomUser($input: DeleteRoomUserInput!) {
        deleteRoomUser(input: $input) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomUserMutation>response.data.deleteRoomUser;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
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
          duplicateFlag
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
  async ListCompanys(
    id?: string,
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($id: ID, $filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCompanys(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
            duplicateFlag
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetArticleTag(id: string): Promise<GetArticleTagQuery> {
    const statement = `query GetArticleTag($id: ID!) {
        getArticleTag(id: $id) {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
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
    return <GetArticleTagQuery>response.data.getArticleTag;
  }
  async ListArticleTags(
    id?: string,
    filter?: ModelArticleTagFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticleTagsQuery> {
    const statement = `query ListArticleTags($id: ID, $filter: ModelArticleTagFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticleTags(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            article {
              __typename
              id
              title
              thumbnail
              content
              isOpen
              createdAt
              updatedAt
            }
            articleTagMaster {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticleTagsQuery>response.data.listArticleTags;
  }
  async GetArticleTagMaster(id: string): Promise<GetArticleTagMasterQuery> {
    const statement = `query GetArticleTagMaster($id: ID!) {
        getArticleTagMaster(id: $id) {
          __typename
          id
          content
          articles {
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
    return <GetArticleTagMasterQuery>response.data.getArticleTagMaster;
  }
  async ListArticleTagMasters(
    id?: string,
    filter?: ModelArticleTagMasterFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticleTagMastersQuery> {
    const statement = `query ListArticleTagMasters($id: ID, $filter: ModelArticleTagMasterFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticleTagMasters(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticleTagMastersQuery>response.data.listArticleTagMasters;
  }
  async GetArticle(id: string): Promise<GetArticleQuery> {
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
            duplicateFlag
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
  async ListArticles(
    id?: string,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticlesQuery> {
    const statement = `query ListArticles($id: ID, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticles(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticlesQuery>response.data.listArticles;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
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
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    id?: string,
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($id: ID, $filter: ModelCommentFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listComments(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
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
            article {
              __typename
              id
              title
              thumbnail
              content
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetWorkType(id: string): Promise<GetWorkTypeQuery> {
    const statement = `query GetWorkType($id: ID!) {
        getWorkType(id: $id) {
          __typename
          id
          content
          companies {
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
    return <GetWorkTypeQuery>response.data.getWorkType;
  }
  async ListWorkTypes(
    id?: string,
    filter?: ModelWorkTypeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListWorkTypesQuery> {
    const statement = `query ListWorkTypes($id: ID, $filter: ModelWorkTypeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listWorkTypes(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkTypesQuery>response.data.listWorkTypes;
  }
  async GetStyleType(id: string): Promise<GetStyleTypeQuery> {
    const statement = `query GetStyleType($id: ID!) {
        getStyleType(id: $id) {
          __typename
          id
          content
          companies {
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
    return <GetStyleTypeQuery>response.data.getStyleType;
  }
  async ListStyleTypes(
    id?: string,
    filter?: ModelStyleTypeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListStyleTypesQuery> {
    const statement = `query ListStyleTypes($id: ID, $filter: ModelStyleTypeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listStyleTypes(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStyleTypesQuery>response.data.listStyleTypes;
  }
  async GetCompanyWorkType(id: string): Promise<GetCompanyWorkTypeQuery> {
    const statement = `query GetCompanyWorkType($id: ID!) {
        getCompanyWorkType(id: $id) {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
    return <GetCompanyWorkTypeQuery>response.data.getCompanyWorkType;
  }
  async ListCompanyWorkTypes(
    id?: string,
    filter?: ModelCompanyWorkTypeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCompanyWorkTypesQuery> {
    const statement = `query ListCompanyWorkTypes($id: ID, $filter: ModelCompanyWorkTypeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCompanyWorkTypes(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            workType {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanyWorkTypesQuery>response.data.listCompanyWorkTypes;
  }
  async GetCompanyStyleType(id: string): Promise<GetCompanyStyleTypeQuery> {
    const statement = `query GetCompanyStyleType($id: ID!) {
        getCompanyStyleType(id: $id) {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
    return <GetCompanyStyleTypeQuery>response.data.getCompanyStyleType;
  }
  async ListCompanyStyleTypes(
    id?: string,
    filter?: ModelCompanyStyleTypeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCompanyStyleTypesQuery> {
    const statement = `query ListCompanyStyleTypes($id: ID, $filter: ModelCompanyStyleTypeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCompanyStyleTypes(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            styleType {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanyStyleTypesQuery>response.data.listCompanyStyleTypes;
  }
  async GetCharacter(id: string): Promise<GetCharacterQuery> {
    const statement = `query GetCharacter($id: ID!) {
        getCharacter(id: $id) {
          __typename
          id
          content
          applicants {
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
    return <GetCharacterQuery>response.data.getCharacter;
  }
  async ListCharacters(
    id?: string,
    filter?: ModelCharacterFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCharactersQuery> {
    const statement = `query ListCharacters($id: ID, $filter: ModelCharacterFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCharacters(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCharactersQuery>response.data.listCharacters;
  }
  async GetSkill(id: string): Promise<GetSkillQuery> {
    const statement = `query GetSkill($id: ID!) {
        getSkill(id: $id) {
          __typename
          id
          content
          applicants {
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
    return <GetSkillQuery>response.data.getSkill;
  }
  async ListSkills(
    id?: string,
    filter?: ModelSkillFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListSkillsQuery> {
    const statement = `query ListSkills($id: ID, $filter: ModelSkillFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listSkills(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSkillsQuery>response.data.listSkills;
  }
  async GetApplicantCharacter(id: string): Promise<GetApplicantCharacterQuery> {
    const statement = `query GetApplicantCharacter($id: ID!) {
        getApplicantCharacter(id: $id) {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
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
    return <GetApplicantCharacterQuery>response.data.getApplicantCharacter;
  }
  async ListApplicantCharacters(
    id?: string,
    filter?: ModelApplicantCharacterFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListApplicantCharactersQuery> {
    const statement = `query ListApplicantCharacters($id: ID, $filter: ModelApplicantCharacterFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listApplicantCharacters(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            character {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            applicant {
              __typename
              id
              name
              email
              firstName
              lastName
              logo
              backgroundImg
              about
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApplicantCharactersQuery>response.data.listApplicantCharacters;
  }
  async GetApplicantSkill(id: string): Promise<GetApplicantSkillQuery> {
    const statement = `query GetApplicantSkill($id: ID!) {
        getApplicantSkill(id: $id) {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
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
    return <GetApplicantSkillQuery>response.data.getApplicantSkill;
  }
  async ListApplicantSkills(
    id?: string,
    filter?: ModelApplicantSkillFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListApplicantSkillsQuery> {
    const statement = `query ListApplicantSkills($id: ID, $filter: ModelApplicantSkillFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listApplicantSkills(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            applicant {
              __typename
              id
              name
              email
              firstName
              lastName
              logo
              backgroundImg
              about
              createdAt
              updatedAt
            }
            skill {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApplicantSkillsQuery>response.data.listApplicantSkills;
  }
  async GetArea(id: string): Promise<GetAreaQuery> {
    const statement = `query GetArea($id: ID!) {
        getArea(id: $id) {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
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
    return <GetAreaQuery>response.data.getArea;
  }
  async ListAreas(
    id?: string,
    filter?: ModelAreaFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListAreasQuery> {
    const statement = `query ListAreas($id: ID, $filter: ModelAreaFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listAreas(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAreasQuery>response.data.listAreas;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    id?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($id: ID, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
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
  async ListApplicants(
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
              nextToken
            }
            skills {
              __typename
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
  async GetInvitedRoom(id: string): Promise<GetInvitedRoomQuery> {
    const statement = `query GetInvitedRoom($id: ID!) {
        getInvitedRoom(id: $id) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          toUser {
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
          toUsername
          fromUser {
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
          status
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
    return <GetInvitedRoomQuery>response.data.getInvitedRoom;
  }
  async ListInvitedRooms(
    id?: string,
    filter?: ModelInvitedRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListInvitedRoomsQuery> {
    const statement = `query ListInvitedRooms($id: ID, $filter: ModelInvitedRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listInvitedRooms(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            toUser {
              __typename
              id
              username
              displayName
              logo
              user_role
              createdAt
              updatedAt
            }
            toUsername
            fromUser {
              __typename
              id
              username
              displayName
              logo
              user_role
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInvitedRoomsQuery>response.data.listInvitedRooms;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
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
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    id?: string,
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($id: ID, $filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRooms(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
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
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              user_role
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
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
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetRoomUser(id: string): Promise<GetRoomUserQuery> {
    const statement = `query GetRoomUser($id: ID!) {
        getRoomUser(id: $id) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
          username
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
    return <GetRoomUserQuery>response.data.getRoomUser;
  }
  async ListRoomUsers(
    id?: string,
    filter?: ModelRoomUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomUsersQuery> {
    const statement = `query ListRoomUsers($id: ID, $filter: ModelRoomUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRoomUsers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            room {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
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
            username
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomUsersQuery>response.data.listRoomUsers;
  }
  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage($roomId: ID!) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnCreateInvitedRoomListener: Observable<
    OnCreateInvitedRoomSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInvitedRoom($toUsername: String!) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          toUser {
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
          toUsername
          fromUser {
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
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateInvitedRoomSubscription>;

  OnCreateRoomUserListener: Observable<
    OnCreateRoomUserSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoomUser($username: String!) {
        onCreateRoomUser(username: $username) {
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
              user_role
              createdAt
              updatedAt
            }
            inviting {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
          username
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRoomUserSubscription>;

  OnCreateCompanyListener: Observable<
    OnCreateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
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
          duplicateFlag
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCompanySubscription>;

  OnUpdateCompanyListener: Observable<
    OnUpdateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
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
          duplicateFlag
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCompanySubscription>;

  OnDeleteCompanyListener: Observable<
    OnDeleteCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
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
          duplicateFlag
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
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCompanySubscription>;

  OnCreateArticleTagListener: Observable<
    OnCreateArticleTagSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateArticleTag {
        onCreateArticleTag {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateArticleTagSubscription>;

  OnUpdateArticleTagListener: Observable<
    OnUpdateArticleTagSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArticleTag {
        onUpdateArticleTag {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateArticleTagSubscription>;

  OnDeleteArticleTagListener: Observable<
    OnDeleteArticleTagSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArticleTag {
        onDeleteArticleTag {
          __typename
          id
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          articleTagMaster {
            __typename
            id
            content
            articles {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteArticleTagSubscription>;

  OnCreateArticleTagMasterListener: Observable<
    OnCreateArticleTagMasterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateArticleTagMaster {
        onCreateArticleTagMaster {
          __typename
          id
          content
          articles {
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
      }`
    )
  ) as Observable<OnCreateArticleTagMasterSubscription>;

  OnUpdateArticleTagMasterListener: Observable<
    OnUpdateArticleTagMasterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArticleTagMaster {
        onUpdateArticleTagMaster {
          __typename
          id
          content
          articles {
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
      }`
    )
  ) as Observable<OnUpdateArticleTagMasterSubscription>;

  OnDeleteArticleTagMasterListener: Observable<
    OnDeleteArticleTagMasterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArticleTagMaster {
        onDeleteArticleTagMaster {
          __typename
          id
          content
          articles {
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
      }`
    )
  ) as Observable<OnDeleteArticleTagMasterSubscription>;

  OnCreateArticleListener: Observable<
    OnCreateArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateArticle {
        onCreateArticle {
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
            duplicateFlag
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
      }`
    )
  ) as Observable<OnCreateArticleSubscription>;

  OnUpdateArticleListener: Observable<
    OnUpdateArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArticle {
        onUpdateArticle {
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
            duplicateFlag
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
      }`
    )
  ) as Observable<OnUpdateArticleSubscription>;

  OnDeleteArticleListener: Observable<
    OnDeleteArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArticle {
        onDeleteArticle {
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
            duplicateFlag
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
      }`
    )
  ) as Observable<OnDeleteArticleSubscription>;

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
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
          article {
            __typename
            id
            title
            tags {
              __typename
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
              duplicateFlag
              createdAt
              updatedAt
            }
            content
            isOpen
            comments {
              __typename
              nextToken
            }
            area {
              __typename
              id
              content
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;

  OnCreateWorkTypeListener: Observable<
    OnCreateWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWorkType {
        onCreateWorkType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnCreateWorkTypeSubscription>;

  OnUpdateWorkTypeListener: Observable<
    OnUpdateWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWorkType {
        onUpdateWorkType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnUpdateWorkTypeSubscription>;

  OnDeleteWorkTypeListener: Observable<
    OnDeleteWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWorkType {
        onDeleteWorkType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnDeleteWorkTypeSubscription>;

  OnCreateStyleTypeListener: Observable<
    OnCreateStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStyleType {
        onCreateStyleType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnCreateStyleTypeSubscription>;

  OnUpdateStyleTypeListener: Observable<
    OnUpdateStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStyleType {
        onUpdateStyleType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnUpdateStyleTypeSubscription>;

  OnDeleteStyleTypeListener: Observable<
    OnDeleteStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStyleType {
        onDeleteStyleType {
          __typename
          id
          content
          companies {
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
      }`
    )
  ) as Observable<OnDeleteStyleTypeSubscription>;

  OnCreateCompanyWorkTypeListener: Observable<
    OnCreateCompanyWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompanyWorkType {
        onCreateCompanyWorkType {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCompanyWorkTypeSubscription>;

  OnUpdateCompanyWorkTypeListener: Observable<
    OnUpdateCompanyWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompanyWorkType {
        onUpdateCompanyWorkType {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCompanyWorkTypeSubscription>;

  OnDeleteCompanyWorkTypeListener: Observable<
    OnDeleteCompanyWorkTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompanyWorkType {
        onDeleteCompanyWorkType {
          __typename
          id
          workType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCompanyWorkTypeSubscription>;

  OnCreateCompanyStyleTypeListener: Observable<
    OnCreateCompanyStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompanyStyleType {
        onCreateCompanyStyleType {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCompanyStyleTypeSubscription>;

  OnUpdateCompanyStyleTypeListener: Observable<
    OnUpdateCompanyStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompanyStyleType {
        onUpdateCompanyStyleType {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCompanyStyleTypeSubscription>;

  OnDeleteCompanyStyleTypeListener: Observable<
    OnDeleteCompanyStyleTypeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompanyStyleType {
        onDeleteCompanyStyleType {
          __typename
          id
          styleType {
            __typename
            id
            content
            companies {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
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
            duplicateFlag
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCompanyStyleTypeSubscription>;

  OnCreateCharacterListener: Observable<
    OnCreateCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCharacter {
        onCreateCharacter {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnCreateCharacterSubscription>;

  OnUpdateCharacterListener: Observable<
    OnUpdateCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCharacter {
        onUpdateCharacter {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnUpdateCharacterSubscription>;

  OnDeleteCharacterListener: Observable<
    OnDeleteCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCharacter {
        onDeleteCharacter {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnDeleteCharacterSubscription>;

  OnCreateSkillListener: Observable<OnCreateSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSkill {
        onCreateSkill {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnCreateSkillSubscription>;

  OnUpdateSkillListener: Observable<OnUpdateSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSkill {
        onUpdateSkill {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnUpdateSkillSubscription>;

  OnDeleteSkillListener: Observable<OnDeleteSkillSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSkill {
        onDeleteSkill {
          __typename
          id
          content
          applicants {
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
      }`
    )
  ) as Observable<OnDeleteSkillSubscription>;

  OnCreateApplicantCharacterListener: Observable<
    OnCreateApplicantCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplicantCharacter {
        onCreateApplicantCharacter {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateApplicantCharacterSubscription>;

  OnUpdateApplicantCharacterListener: Observable<
    OnUpdateApplicantCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplicantCharacter {
        onUpdateApplicantCharacter {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateApplicantCharacterSubscription>;

  OnDeleteApplicantCharacterListener: Observable<
    OnDeleteApplicantCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplicantCharacter {
        onDeleteApplicantCharacter {
          __typename
          id
          character {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteApplicantCharacterSubscription>;

  OnCreateApplicantSkillListener: Observable<
    OnCreateApplicantSkillSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplicantSkill {
        onCreateApplicantSkill {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateApplicantSkillSubscription>;

  OnUpdateApplicantSkillListener: Observable<
    OnUpdateApplicantSkillSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplicantSkill {
        onUpdateApplicantSkill {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateApplicantSkillSubscription>;

  OnDeleteApplicantSkillListener: Observable<
    OnDeleteApplicantSkillSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplicantSkill {
        onDeleteApplicantSkill {
          __typename
          id
          applicant {
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
              nextToken
            }
            skills {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          skill {
            __typename
            id
            content
            applicants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteApplicantSkillSubscription>;

  OnCreateAreaListener: Observable<OnCreateAreaSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateArea {
        onCreateArea {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAreaSubscription>;

  OnUpdateAreaListener: Observable<OnUpdateAreaSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArea {
        onUpdateArea {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAreaSubscription>;

  OnDeleteAreaListener: Observable<OnDeleteAreaSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArea {
        onDeleteArea {
          __typename
          id
          content
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
          companies {
            __typename
            items {
              __typename
              id
              name
              email
              logo
              backgroundImg
              about
              duplicateFlag
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAreaSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          displayName
          logo
          user_role
          invitedRooms {
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
          joinedRooms {
            __typename
            items {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            nextToken
          }
          ownedRooms {
            __typename
            items {
              __typename
              id
              name
              image
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateApplicantListener: Observable<
    OnCreateApplicantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplicant {
        onCreateApplicant {
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
      }`
    )
  ) as Observable<OnCreateApplicantSubscription>;

  OnUpdateApplicantListener: Observable<
    OnUpdateApplicantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplicant {
        onUpdateApplicant {
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
      }`
    )
  ) as Observable<OnUpdateApplicantSubscription>;

  OnDeleteApplicantListener: Observable<
    OnDeleteApplicantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplicant {
        onDeleteApplicant {
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
      }`
    )
  ) as Observable<OnDeleteApplicantSubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
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
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              when
              roomId
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;
}
