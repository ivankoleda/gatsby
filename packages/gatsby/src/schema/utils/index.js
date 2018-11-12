const capitalize = require(`./capitalize`)
const createKey = require(`./create-key`)
const createSelector = require(`./create-selector`)
const createSortKey = require(`./create-sort-key`)
const findAncestorNode = require(`./find-ancestor-node`)
const getAbsolutePath = require(`./get-absolute-path`)
const getBaseDir = require(`./get-base-dir`)
const getComponentDir = require(`./get-component-dir`)
const getParentNode = require(`./get-parent-node`)
const getUniqueValues = require(`./get-unique-values`)
const getUniqueValuesBy = require(`./get-unique-values-by`)
const getValueAtSelector = require(`./get-value-at-selector`)
const is32bitInteger = require(`./is-32bit-integer`)
const isDate = require(`./is-date`)
const isObject = require(`./is-object`)
const isProductionBuild = require(`./is-production-build`)
const { getParentNodeId, trackObjects } = require(`./node-tracking`)

// TODO: Clean up
module.exports = {
  capitalize,
  createKey,
  createSelector,
  createSortKey,
  findAncestorNode,
  getAbsolutePath,
  getBaseDir,
  getComponentDir,
  getParentNode,
  getParentNodeId,
  getUniqueValues,
  getUniqueValuesBy,
  getValueAtSelector,
  is32bitInteger,
  isDate,
  isObject,
  isProductionBuild,
  trackObjects,
}
