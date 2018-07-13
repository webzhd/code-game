const js = [
    {
        text: "Array.from()",
        desc: "从一个类似数组或可迭代对象中创建一个新的数组实例"
    },
    {
        text: "Array.isArray()",
        desc: "确定传递的值是否是一个 Array"
    },
    {
        text: "Array.of()",
        desc: "创建一个具有可变数量参数的新数组实例"
    },
    {
        text: "concat()",
        desc: "用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组"
    },
    {
        text: "copyWithin()",
        desc: "复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小"
    },
    {
        text: "entries()",
        desc: "方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对"
    },
    {
        text: "every()",
        desc: "测试数组的所有元素是否都通过了指定函数的测试"
    },
    {
        text: "fill()",
        desc: "固定值填充一个数组中从起始索引到终止索引内的全部元素"
    },
    {
        text: "filter()",
        desc: "创建一个新数组, 其包含通过所提供函数实现的测试的所有元素"
    },
    {
        text: "find()",
        desc: "回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined"
    },
    {
        text: "findIndex()",
        desc: "返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1"
    },
    {
        text: "flat()",
        desc: "会递归到指定深度将所有子数组连接，并返回一个新数组"
    },
    {
        text: "forEach()",
        desc: "方法对数组的每个元素执行一次提供的函数"
    },
    {
        text: "includes()",
        desc: "来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false"
    },
    {
        text: "indexOf()",
        desc: "返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1"
    },
    {
        text: "join()",
        desc: "将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。"
    },
    {
        text: "keys()",
        desc: "返回一个新的Array迭代器，它包含数组中每个索引的键"
    },
    {
        text: "lastIndexOf()",
        desc: "方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始"
    },
    {
        text: "map()",
        desc: "方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。"
    },
    {
        text: "pop()",
        desc: "从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度"
    },
    {
        text: "push()",
        desc: "将一个或多个元素添加到数组的末尾，并返回新数组的长度。"
    },
    {
        text: "reduce()",
        desc: "方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值"
    },
    {
        text: "reduceRight()",
        desc: "接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值"
    },
    {
        text: "reverse()",
        desc: "将数组中元素的位置颠倒"
    },
    {
        text: "shift()",
        desc: "从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。"
    },
    {
        text: "slice()",
        desc: "返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改"
    },
    {
        text: "some()",
        desc: "测试数组中的某些元素是否通过由提供的函数实现的测试"
    },
    {
        text: "sort()",
        desc: "用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点"
    },
    {
        text: "splice()",
        desc: "通过删除现有元素和/或添加新元素来更改一个数组的内容"
    },
    {
        text: "toLocaleString()",
        desc: "返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ','）隔开"
    },
    {
        text: "toString()",
        desc: "一个字符串，表示指定的数组及其元素"
    },
    {
        text: "unshift()",
        desc: "将一个或多个元素添加到数组的开头，并返回新数组的长度"
    },
    {
        text: "values()",
        desc: "返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值"
    }
]

export default js