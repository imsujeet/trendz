
export interface Info {
  ourid: number;
  title: string;
  code: string;
  source: string;
}

export interface Countrydata {
  info: Info;
  total_cases: number;
  total_recovered: number;
  total_unresolved: number;
  total_deaths: number;
  total_new_cases_today: number;
  total_new_deaths_today: number;
  total_active_cases: number;
  total_serious_cases: number;
  total_danger_rank: number;
}

export interface CoronaResponse {
  countrydata: Countrydata[];
  stat: string;
}

