'use strict';

var assert = require('power-assert');

var Todo = require('../TDDBC/Todo.js');

describe('TodoTest', function () {
    var sut;

    beforeEach(function () {
        sut = new Todo();
    });

    describe('テストのためのテスト', function () {
        it('成功するテスト', function () {
            assert.ok( null !== sut && undefined !== sut );
        });
    });

    describe('タスクを追加する', function () {
        it('1件追加したら1件になる', function () {
			sut.addTask('HOGE');
            assert.ok( sut.count() === 1 );
        });
        it('2件追加したら2件になる',function(){
			sut.addTask('HOGE');
			sut.addTask('FOO');
			assert.ok( sut.count() === 2 );
        });
    });

    describe('TODO全てを一覧で見られる', function () {
        it('指定番号のタスクを取得できる', function () {
			sut.addTask('HOGE');
            assert.ok( sut.getTask(0) === 'HOGE' );
        });
		
    });
/*
    describe('.status', function () {
        it('は、trueであるべき', function () {
            assert.ok(sut.status === false);
        });
    });

    describe('#say()', function () {
        it("は、'Hello TDDBC!'が返ってくるべき", function () {
            assert(sut.say() === 'Hello TDDBC!');
        });
    });
*/
});
