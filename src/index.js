import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Container from './Container'

function cloneDeep(obj) {
    let family = {}
    let parent = Object.getPrototypeOf(obj)

    while (parent != null) {
        family = completeAssign(deepClone(family), parent)
        parent = Object.getPrototypeOf(parent)
    }
    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
                return descriptors
            }, {})

            // Object.assign 默认也会拷贝可枚举的Symbols
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym)
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor
                }
            })
            Object.defineProperties(target, descriptors)
        })
        return target
    }

    return completeAssign(deepClone(obj), family)
}

function deepClone(obj, hash = new WeakMap()) {
    if (!isObject(obj)) {
        return obj
    }
    // 查表，防止循环拷贝
    if (hash.has(obj)) return hash.get(obj)

    let isArray = Array.isArray(obj)
    // 初始化拷贝对象
    let cloneObj = isArray ? [] : {}
    // 哈希表设值
    hash.set(obj, cloneObj)
    // 获取源对象所有属性描述符
    let allDesc = Object.getOwnPropertyDescriptors(obj)
    // 获取源对象所有的 Symbol 类型键
    let symKeys = Object.getOwnPropertySymbols(obj)
    // 拷贝 Symbol 类型键对应的属性
    if (symKeys.length > 0) {
        symKeys.forEach(symKey => {
            cloneObj[symKey] = isObject(obj[symKey]) ? deepClone(obj[symKey], hash) : obj[symKey]
        })
    }

    // 拷贝不可枚举属性,因为 allDesc 的 value 是浅拷贝，所以要放在前面
    cloneObj = Object.create(
        Object.getPrototypeOf(cloneObj),
        allDesc
    )
    // 拷贝可枚举属性（包括原型链上的）
    for (let key in obj) {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }

    return cloneObj
}

function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
}

let a = {}
a.a = a


let test = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: [0, 1, 2],
    func: function() {
        console.log('我是一个函数')
    },
    date: new Date(),
    reg: new RegExp('/我是一个正则/ig'),
    err: new Error('我是一个错误'),
    symbol: Symbol('我是一个Symbol'),
    a
}
console.log(test)
let c = cloneDeep(test)
console.log(c)


ReactDom.render(
    <div>123</div>,
    document.querySelector('#app')
)
