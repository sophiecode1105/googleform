export type FormData = {
  title: string;
  explain: string;
};

export interface surveyState {
  header: {
    title: string;
    explain: string;
  };
  value: string;
}
