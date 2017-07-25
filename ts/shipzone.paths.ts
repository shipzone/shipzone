import * as plugins from './shipzone.plugins'

// ===========
// directories
// ===========

/**
 * the directory of the shipzone package
 */
export let packageDir = plugins.path.join(__dirname, '../')

/**
 * the current working directory
 */
export let cwd = process.cwd()

/**
 * the project dorectory (same as cwd)
 */
export let projectDir = cwd

// =====
// files
// =====

export let projectAppJson = plugins.path.join(projectDir, 'app.json')
