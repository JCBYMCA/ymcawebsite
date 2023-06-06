import axios from "axios";

export default function handler (req, res) {
    const {path} = req.query;
    console.log(path);
    const url = `http://49.50.77.87:8888/${path}`;
    if (req.method === 'POST') {
        axios.post(url, req.body).then((response) => {
            res.status(200).json(response.data);
        });
    }
    else {
        axios.get(url).then((response) => {
            res.status(200).json(response.data);
        });
    }
}
