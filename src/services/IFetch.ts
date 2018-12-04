type children = (data: IFetchState) => any;

type refetch = () => void;

// interface IParams {}

// interface IRequestData {}

// interface IErrors {}

interface IFetchProps {
  url: string;
  children: children;
  params?: any; // IParams;
}

interface IFetchState {
  url: string | undefined;
  loading: boolean;
  params: any; // IParams | undefined;
  data: any; // IRequestData | undefined;
  errors: any; // IErrors | undefined;
  refetch: refetch;
}

export { IFetchProps, IFetchState };
