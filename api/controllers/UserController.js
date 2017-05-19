/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {
        var params = req.params.all();
        User.create(params, function(err, user) {
            if (err) return next(err);

            res.status(201);

            res.json(user);
        });
    },
    find: function(req, res, next) {
        var where = req.param('where');
        if (_.isString(where)) {
            where = JSON.parse(where);
        }

        var options = {
            limit: req.param('limit') || undefined,
            skip: req.param('skip') || undefined,
            sort: req.param('sort') || undefined,
            where: where || undefined
        };

        User.find(options, function(err, users) {
            if (err) return next(err);

            res.json(users);
        })
    },
    findOne: function(req, res, next) {
        var id = req.param('id');
        User.findOne(id, function(err, user) {
            if (user === undefined) return res.notFound();

            if (err) return next(err);

            res.json(user);
        })
    },
    update: function(req, res, next) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        var criteria = {};
        criteria = _.merge({}, req.params.all(), req.body);

        User.update(id, criteria, function(err, user) {
            if (user.length === 0) return res.notFound;
            if (err) return next(err);

            res.json(user);
        })
    },
    destroy: function(req, res, next) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        User.findOne(id, function(err, user) {
            if (err) return res.serverError(err);

            if (!user) return res.notFound();

            User.destroy(id, function(err) {
                if (err) return next(err);

                return res.json(user);
            })
        })
    }
};

