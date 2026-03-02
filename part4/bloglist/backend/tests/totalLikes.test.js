const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    const emptyList = []

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        }
    ]

    const biggerList = [
        {
            _id: '6a422aa71b54a676234d17f8',
            title: 'First blog',
            author: 'Author 1',
            url: 'http://example1.com',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71h54a676234d17f8',
            title: 'Second blog',
            author: 'Author 2',
            url: 'http://example2.com',
            likes: 7,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f0',
            title: 'Third blog',
            author: 'Author 3',
            url: 'http://example3.com',
            likes: 3,
            __v: 0
        }
    ]

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes(emptyList)
        assert.strictEqual(result, 0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(biggerList)
        assert.strictEqual(result, 15)
    })
})