export type FormData = {
  title: string;
  explain: string;
};

export interface surveyState {
  header: {
    title: string;
    explain: string;
  };
  questions: question[];
  value: string;
}

export interface visibleProp {
  visible: boolean;
}

export interface option {
  content: string;
  order: number;
}

export interface question {
  title: string;
  optionType: string;
  optionList: option[];
}
