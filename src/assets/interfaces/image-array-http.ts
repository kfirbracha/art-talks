import { IBaseResponse } from './base-response';
import { Iimage } from './image';

export interface IImagesArrRes extends IBaseResponse {
  data: Iimage[];
}
