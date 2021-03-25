const noflo = require('noflo');
const { v4: uuid } = require('uuid');

const iframeAddress = 'http://localhost:3000/browser/everything.html?fbp_noload=false&fbp_protocol=iframe';

const ensureOneIframeRuntime = (runtimes) => {
  const foundLocal = runtimes.find((runtime) => {
    // Check that we don't have the iframe runtime already
    if ((runtime.protocol === 'iframe') && (runtime.address === iframeAddress)) {
      return true;
    }
    return false;
  });
  if (foundLocal) {
    return null;
  }
  const iframeRuntime = {
    label: 'NoFlo HTML5 environment',
    id: uuid(),
    protocol: 'iframe',
    address: iframeAddress,
    type: 'noflo-browser',
    seen: Date.now(),
  };
  return iframeRuntime;
};

exports.getComponent = () => {
  const c = new noflo.Component();
  c.inPorts.add('in',
    { datatype: 'array' });
  c.outPorts.add('out',
    { datatype: 'object' });
  c.outPorts.add('runtimes',
    { datatype: 'array' });

  return c.process((input, output) => {
    const runtimes = input.getData('in') || [];
    const iframeRuntime = ensureOneIframeRuntime(runtimes);
    if (iframeRuntime) {
      // Added iframe runtime
      output.send({
        out: iframeRuntime,
      });
      runtimes.push(iframeRuntime);
    }
    output.sendDone({
      runtimes,
    });
  });
};
