import { connect } from 'react-redux';
import { getCur } from '../actions';
import {getDynamic} from '../actions';
import {changeStartDate} from '../actions';
import {changeEndDate} from '../actions';
import {addCurToFavorite} from '../actions';

import {CurrencyDynamicForDates} from '../components/currency-dynamic-for-dates';

const mapStateToProps = (state) => {
  return {
    dynamic: state.getDynamic.dynamic,
    choosenId: state.avaibleCurrencies.choosenId,
    choosenAbr: state.avaibleCurrencies.choosenAbr,
    startDate: state.changeDate.startDate,
    endDate: state.changeDate.endDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDynamic: (target, start, end) => {
      dispatch(getDynamic(target, start, end));
    },
    changeStartDate: (date) => {
      dispatch(changeStartDate(date));
    },
    changeEndDate: (date) => {
      dispatch(changeEndDate(date));
    },
    addCurToFavorite: (abr, id) => {
      dispatch(addCurToFavorite(abr, id));
    }
  };
};

export const ConnectedCurrencyDynamicForDates = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyDynamicForDates);
