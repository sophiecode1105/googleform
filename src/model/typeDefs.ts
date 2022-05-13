export type FormData = {
  title: string;
  explain: string;
};

export interface surveyState {
  header: {
    title: string;
    explain: string;
  };
  question: {
    title: string;
    optionType: string;
    optionList: string[];
  };
  value: string;
}

export interface visibleProp {
  visible: boolean;
}
