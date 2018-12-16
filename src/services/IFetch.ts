type children = (data: IFetchState) => any;

// GET Request
type refetch = () => void;

// POST / PUT / DELETE / GET Requests
type mutation = (method: string, body: any) => void;

interface IFetchProps {
  url: string;
  children: children;
  authorization?: string | undefined;
  method?: string | undefined;
  params?: any; // IParams;
}

interface IFetchState {
  url: string | undefined;
  loading: boolean;
  params: any; // IParams | undefined;
  data: any; // IRequestData | undefined;
  errors: any; // IErrors | undefined;
  refetch: refetch;
  mutation: mutation;
}

export { IFetchProps, IFetchState };
