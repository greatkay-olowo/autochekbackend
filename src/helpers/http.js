// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('https');
export default getLocation = async () => {
  const options = {
    method: 'GET',
    hostname:
      'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    port: null,
    path: '/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8',
    headers: {
      'x-rapidapi-key': '88c775a3ffmsh368bff8cb938becp1b3edbjsn86436e6974f1',
      'x-rapidapi-host':
        'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
      useQueryString: true,
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      const body = Buffer.concat(chunks);
      const data = body.toString();
      const parsedData = JSON.parse(data);
      const lat = parsedData.latitude;
      const long = parsedData.longitude;
      return { lat: lat, long: long };
    });
  });
  req.end();
};
