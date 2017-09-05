import { ITechnology } from './technology';

export interface ITechnicalKnowledge {
  OrderId?: number;
  Desc?: string;
  Items: Array<ITechnology>;
}
