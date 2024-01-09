import axios from 'axios';

const realFetch = async (url, { method, headers }) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            headers
        });


        return response?.data;
    } catch (err) {
        // Handle error
        console.log('Error fetching data:', err);
        throw new Error(err);
    }
};

export function callAPI(url, opts) {
    const { method } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
        // wrap in timeout to simulate server api call
        setTimeout(handleRoute, 500);

        function handleRoute() {
            switch (true) {
                case url?.endsWith('/media-update') && method === 'PUT':
                    return ok(updateMedia(body));
                default:
                    // pass through any requests not handled above
                    return realFetch(url, opts)
                        .then(response => resolve(ok(response)))
                        .catch(err => reject(error(err)));
            }
        }

        function updateMedia({ itemIndex, newName, list }) {
            const updatedList = [...list || []];
            updatedList[itemIndex].Title = newName;
            return updatedList;
        }

        function ok(body) {
            resolve({ ok: true, data: body });
        }

        function error(message) {
            resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
        }
    });
}
