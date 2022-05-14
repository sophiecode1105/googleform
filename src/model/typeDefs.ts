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
  necessary: boolean;
  optionType: type;
  optionList: option[];
}

export interface type {
  typeTitle: string;
  sort: string;
  img: string;
}

export interface title {
  title: string;
  explain: string;
}
