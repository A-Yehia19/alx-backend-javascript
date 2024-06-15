export default function handleResponseFromAPI(promise) {
  const onResolve = () => ({ status: 200, body: 'Success' });
  const onReject = () => Error();
  const onFinish = () => console.log('Got a response from the API');

  return promise
    .then(onResolve)
    .catch(onReject)
    .finally(onFinish);
}
