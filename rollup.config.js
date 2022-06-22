import dts from 'rollup-plugin-dts';export default [
    ...
    {
        input: 'lib/index.d.ts',
        output: {
            file: 'index.d.ts'
        },
        plugins: [dts()]
    }
]