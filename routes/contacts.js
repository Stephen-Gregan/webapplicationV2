const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @router  GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: 'Server error..' });
	}
});

// @router  POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			check('name', 'Name is required')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, phone, type } = req.body;

		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id
			});

			const contact = await newContact.save();
			res.json(contact);
		} catch (err) {
			console.error(err);
			res.status(500).json('Server error.');
		}
	}
);

// @router  PUT api/contacts
// @desc    Get all users contacts
// @access  Private
router.put('/:id', auth, async (req, res) => {
	const { name, email, phone, type } = req.body;

	// Build Contact Object
	const contactFields = {};

	if (name) contactFields.name = name;
	if (email) contactFields.email = email;
	if (phone) contactFields.phone = phone;
	if (type) contactFields.type = type;

	try {
		let contact = await Contact.findById(req.params.id);
		console.log(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'Contact not found' });

		if (contact.user.toString() !== req.user.id) {
			console.log(contact.user.toString());
			return res.status(401).json({ msg: 'Not authorized' });
		}
		contact = await Contact.findByIdAndUpdate(
			req.params.id,
			{
				$set: contactFields
			},
			{ new: true }
		);

		res.json(contact);
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error........');
	}
});

// @router  DELETE api/contacts
// @desc    Delete users contacts
// @access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let contact = await Contact.findById(req.params.id);
		//console.log(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'Contact not found' });

		if (contact.user.toString() !== req.user.id) {
			//console.log(contact.user.toString());
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Contact.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error........');
	}
});

module.exports = router;