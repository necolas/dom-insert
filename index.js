/**
 * Exports
 */

module.exports = {
  after: after,
  append: append,
  before: before,
  prepend: prepend
};

/**
 * after
 * @param {Element} element
 * @param {String|Node|NodeList|Array<Node>} content
 */
function after(element, content) {
  if (isString(content)) {
    return element.insertAdjacentHTML('afterEnd', content);
  } else {
    // when the second parameter of 'insertBefore' is 'null' the content is
    // appended to the end of the 'parentNode'.
    return element.parentNode.insertBefore(normalizeContent(content), element.nextSibling);
  }
}

/**
 * append
 * @param {Element} element
 * @param {String|Node|NodeList|Array<Node>} content
 */
function append(element, content) {
  if (isString(content)) {
    return element.insertAdjacentHTML('beforeEnd', content);
  } else {
    return element.appendChild(normalizeContent(content));
  }
}

/**
 * before
 * @param {Element} element
 * @param {String|Node|NodeList|Array<Node>} content
 */
function before(element, content) {
  if (isString(content)) {
    return element.insertAdjacentHTML('beforeBegin', content);
  } else {
    return element.parentNode.insertBefore(normalizeContent(content), element);
  }
}

/**
 * prepend
 * @param {Element} element
 * @param {String|Node|NodeList|Array<Node>} content
 */
function prepend(element, content) {
  if (isString(content)) {
    return element.insertAdjacentHTML('afterBegin', content);
  } else {
    return element.insertBefore(normalizeContent(content), element.firstChild);
  }
}

/**
 * Determine if the value is a string
 * @return {Boolean}
 */
function isString(value) {
  return typeof value == 'string';
}

/**
 * Determine if the object is a DOM Node
 * @return {Boolean}
 */
function isNode(o) {
  return (
    typeof Node == 'object' ?
        o instanceof Node :
        o && typeof o == 'object' && typeof o.nodeType == 'number' &&
        typeof o.nodeName == 'string'
  );
}

/**
 * Normalize a DOM Node or a collection of DOM Nodes. Returns a
 * documentFragment if the input is a collection.
 * @param {Node|NodeList|Array<Node>} content - the content to normalize
 * @return {Node}
 */
function normalizeContent(content) {
  var fragment = document.createDocumentFragment();
  var i, len;

  if (isNode(content)) {
    return content;
  } else {
    len = content.length;
    for (i = 0; i < len; i++) { fragment.appendChild(content[i]); }
    return fragment;
  }
}
