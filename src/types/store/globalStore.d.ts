interface GlobalStoreState {
  isLoading: boolean;
  isFlowFetching: boolean;
  fetchResult: boolean;
  bottomSafeArea: number;
  isDarkMode: boolean;
  env: ENV;
  isSimpleMode: boolean;
}

interface ENV {
  version?: string;
  backend?:
    | 'Stash'
    | 'QX'
    | 'Loon'
    | 'Surge'
    | 'ShadowRocket'
    | 'Clash'
    | 'Node';
}
