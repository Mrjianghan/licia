it('invert object keys and values', function ()
{
    var obj = {
        a: 'b',
        c: 'd',
        e: 'f'
    };

    expect(invert(obj)).to.deep.equal({
        b: 'a',
        d: 'c',
        f: 'e'
    });
});