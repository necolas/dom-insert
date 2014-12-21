var dom = require('..');

describe('dom-insert', function () {
  var one, two, nodeArray, nodeList, reference;

  beforeEach(function () {
    var fragment = document.createDocumentFragment();

    // initial fixture
    fixture = document.createElement('div');
    fixture.innerHTML = '<div id="reference">foo</div>';
    document.body.appendChild(fixture);

    // reference element
    reference = document.getElementById('reference');

    // elements
    one = document.createElement('div'); one.id = 'one';
    two = document.createElement('div'); two.id = 'two';
    // array of nodes
    nodeArray = [ one, two ];
    // nodelist
    fragment.appendChild(one.cloneNode());
    fragment.appendChild(two.cloneNode());
    nodeList = fragment.querySelectorAll('div');
  });

  afterEach(function () {
    document.body.removeChild(fixture);
  });

  describe('after(element, content)', function () {
    var actual;
    var expected = '<div id="reference">foo</div><div id="one"></div>';
    var expectedCollection = expected + '<div id="two"></div>';

    it('inserts an HTML string after a given Element', function () {
      dom.after(reference, '<div id="one"></div>');
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('inserts a Node after a given Element', function () {
      dom.after(reference, one);
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('inserts an Array of Nodes after a given Element', function () {
      dom.after(reference, nodeArray);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });

    it('inserts a NodeList after a given Element', function () {
      dom.after(reference, nodeList);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });
  });

  describe('append(element, content)', function () {
    var actual;
    var expected = '<div id="reference">foo<div id="one"></div></div>';
    var expectedCollection = '<div id="reference">foo<div id="one"></div><div id="two"></div></div>';

    it('appends an HTML string to the content of a given Element', function () {
      dom.append(reference, '<div id="one"></div>');
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('appends a Node to the content of a given Element', function () {
      dom.append(reference, one);
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('appends an Array of Nodes to the content of a given Element', function () {
      dom.append(reference, nodeArray);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });

    it('appends a NodeList to the content of a given Element', function () {
      dom.append(reference, nodeList);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });
  });

  describe('before(element, content)', function () {
    var actual;
    var expected = '<div id="two"></div><div id="reference">foo</div>';
    var expectedCollection = '<div id="one"></div>' + expected;

    it('inserts an HTML string before a given Element', function () {
      dom.before(reference, '<div id="two"></div>');
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('inserts a Node before a given Element', function () {
      dom.before(reference, two);
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('inserts an Array of Nodes before a given Element', function () {
      dom.before(reference, nodeArray);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });

    it('inserts a NodeList before a given Element', function () {
      dom.before(reference, nodeList);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });
  });

  describe('prepend(element, content)', function () {
    var actual;
    var expected = '<div id="reference"><div id="one"></div>foo</div>';
    var expectedCollection = '<div id="reference"><div id="one"></div><div id="two"></div>foo</div>';

    it('prepends an HTML string to the content of a given Element', function () {
      dom.prepend(reference, '<div id="one"></div>');
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('prepends a Node to the content of a given Element', function () {
      dom.prepend(reference, one);
      actual = fixture.innerHTML;
      expect(actual).toBe(expected);
    });

    it('prepends an Array of Nodes to the content of a given Element', function () {
      dom.prepend(reference, nodeArray);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });

    it('prepends a NodeList to the content of a given Element', function () {
      dom.prepend(reference, nodeList);
      actual = fixture.innerHTML;
      expect(actual).toBe(expectedCollection);
    });
  });
});
