import { IEducation } from './education';
import { IOrganization } from './organization';
import { ISummary } from './summary';
import { IProject } from './project';
import { ITechnicalKnowledge } from './technical-knowledge';

import { IAward } from './award';
import { ICertification } from './certification';
import { IPersonaldetail } from './personaldetail';

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
  Awards?: Array<IAward>;
  TechnicalKnowledge?: ITechnicalKnowledge;
  Certifications?: Array<ICertification>;
  PersonalDetails?: IPersonaldetail;
}
