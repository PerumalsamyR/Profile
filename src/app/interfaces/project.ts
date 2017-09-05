import { IEnvironment } from './environment';
import { IResponsibility } from './responsibility';
import { ILocation } from './location';

export interface IProject {
  OrderId?: number;
  Client?: string;
  Description?: string;
  Environments?: Array<IEnvironment>;
  Name?: string;
  Responsibilities?: Array<IResponsibility>;
  Role?: string;
  WorkedDateRange?: string;
  LocationsWorked?: Array<ILocation>;
}
