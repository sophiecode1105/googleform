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
    optionList: option[];
  };
  value: string;
}

export interface visibleProp {
  visible: boolean;
}

export interface option {
  content: string;
  order: number;
}
