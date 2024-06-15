export default function handleResponseFromAPI(promise) {
  const onResolve = () => ({ status: 200, body: 'success' });
  const onReject = () => new Error();
  const onFinish = () => console.log('Got a response from the API');

  return promise
    .then(onResolve)
    .catch(onReject)
    .finally(onFinish);
}
