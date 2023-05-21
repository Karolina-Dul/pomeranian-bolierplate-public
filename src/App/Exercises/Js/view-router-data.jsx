import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsBoolean } from '../Js/Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsNumbers } from '../Js/Exercise-js-numbers/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataExerciseJsBoolean,
  blockRouterMetaDataExerciseJsNumbers,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
