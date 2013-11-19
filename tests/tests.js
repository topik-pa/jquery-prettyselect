test("basic: instantiation", function() {
	var $select = $('select#basic').prettyselect();

	equal($select.parents('.prettyselect-wrap').length, 1, 'There is a wrap element');

	$select.prettyselect();

	equal($('.prettyselect-wrap').length, 1, 'If called another time, it does nothing');

	$select.prettyselect('destroy');

	equal($select.parents('.prettyselect-wrap').length, 0, 'It can be destroyed');

	$select.prettyselect();

	equal($select.parents('.prettyselect-wrap').length, 1, 'Can be reinstantiated');

	$select.prettyselect('destroy');
});

test("basic: class names changed", function() {

	var randomWrapClass = Math.random().toString(36).substring(7);
	var randomLabelClass = Math.random().toString(36).substring(7);

	var $select = $('select#basic').prettyselect({
		wrapClass: randomWrapClass,
		labelClass: randomLabelClass
	});

	equal($select.parents('.' + randomWrapClass).length, 1, 'There is a wrap element');

	$select.prettyselect();

	equal($('.' + randomWrapClass).length, 1, 'If called another time, it does nothing');

	$select.prettyselect('destroy');

	equal($select.parents('.' + randomWrapClass).length, 0, 'It can be destroyed');
});
