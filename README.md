TypeScript React Remove by External Demo
=================================

当一个react组件被外部直接以DOM方式移除时，怎么保证我们的组件能够正确卸载？

我写了一个hook `useRemovedByExternal`，可以实现这个功能。

需要注意的是，如果外部直接删除了`useRemovedByExternal`所使用的节点，会导致react内部删除节点失败，在console中报错。

但如果外部直接删除了外层节点，比如react render的根节点，则不会报错。

另外还考虑了refresh window的情况（比如iframe reload），通过`onbeforeunload`来检查删除。

```
npm install
npm run demo
```

It will open page on browser automatically.
