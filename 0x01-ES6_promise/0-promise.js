function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed No API detected'));
  });
}

export default getFullResponseFromAPI;
