# echarts-block

A simple Echarts wrapper that allows you to render charts in blocks.

## Usage

The block will use `setOption` function in your `js` file to build ECharts. It looks like this:

```js
/**
 * Build option object for ECharts.
 * 
 * @param axios Used to help initiate network requests
 * @returns ECharts option object 
 */
async function setOption(axios) {
  return {
      // ...
  }
}
```

## Example

Static chart:

<BlockComponent
 block={{"owner":"wzy1935","repo":"echarts-block","id":"echarts-block","type":"file"}}
 context={{"repo":"echarts-block","owner":"wzy1935","path":"examples/static.js","sha":"main","file":"README.md"}}
 height={322}
 />

Chart that uses Internet data:

<BlockComponent
block={{"owner":"wzy1935","repo":"echarts-block","id":"echarts-block","type":"file"}}
context={{"repo":"echarts-block","owner":"wzy1935","path":"examples/fetch.js","sha":"main","file":"README.md"}}
height={322}
/>
