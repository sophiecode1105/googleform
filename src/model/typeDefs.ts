export interface surveyState {
  header: {
    title: string;
    explain: string;
  };
  questions: question[];
  value: string;
}

export interface answerState {
  header: {
    title: string;
    explain: string;
  };
  results: answer[];
}
export interface answer {
  title: string;
  answer: string;
  necessary: boolean;
  optionType: string;
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
