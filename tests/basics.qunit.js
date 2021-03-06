/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/

(function($) {

	test("basic: instantiation", function() {
		var $select = $('select#basic').prettyselect();

		equal($select.parents('.prettyselect-wrap').length, 1, 'There is a wrap element');

		$select.prettyselect();

		equal($('.prettyselect-wrap').length, 1, 'If called another time, it does nothing');

		$select.prettyselect('destroy');

		equal($select.parents('.prettyselect-wrap').length, 0, 'It can be destroyed');

		equal($select.data('PrettySelect'), undefined, 'There should be no left data elements')

		$select.prettyselect();

		equal($select.parents('.prettyselect-wrap').length, 1, 'Can be reinstantiated');

		$select.prettyselect('destroy');
	});


}(jQuery));