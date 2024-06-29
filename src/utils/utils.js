import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const {data} = await axiosReq.get(resource.next);
    setResource(prevResource => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((p, c) => (
        p.some(x => x.id === c.id) ? p : [...p, c]
      ), prevResource.results),
    }))
  } catch (err) {}
};
