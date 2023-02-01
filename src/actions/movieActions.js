export const NEXT_PLACE = "NEXT_PLACE";
export const PREV_PLACE = "PREV_PLACE";
export const FIRST_PLACE = "FIRST_PLACE";

export const nextPlace = () => {
  return { type: NEXT_PLACE };
};

export const prevPlace = () => {
  return { type: PREV_PLACE };
};

export const firstPlace = () => {
  return { type: FIRST_PLACE };
};
