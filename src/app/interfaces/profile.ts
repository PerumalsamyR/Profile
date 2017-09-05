import { IEducation } from './education';
import { IOrganization } from './organization';
import { ISummary } from './summary';
import { IProject } from './project';
import { ITechnicalKnowledge } from './technical-knowledge';

export interface IProfile {
  Desc?: string;
  EmailId?: string;
  Mobile?: string;
  Name?: string;
  Place?: string;
  Education?: Array<IEducation>;
  Organizations?: Array<IOrganization>;
  Summary?: Array<ISummary>;
  Projects?: Array<IProject>;
  TechnicalKnowledge?: Array<ITechnicalKnowledge>;
}
