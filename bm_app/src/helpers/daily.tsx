import {colors} from '../views/colors';

export type BackgroundDaily = {
  card: string;
  date: string;
};

export const getDailyBackGround = (type: string) => {
  switch (type) {
    case 'warning':
      return {card: colors.medium, date: colors.flash};
    case 'error':
      return {card: colors.dark, date: colors.flash};
    default:
      return {card: colors.flash, date: colors.ultraDark};
  }
};
