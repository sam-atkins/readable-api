const apiHelp = `
<pre>
  Welcome to the Readable API v2.0!
  Refer to the README for REST endpoints documentation.
</pre>
`;

exports.helpPage = (req, res) => {
  res.send(apiHelp);
};
