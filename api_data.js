const pool = require('./db')

const get = (req, res) => {
    pool.query('select * from sch_ui_variants', (err, results) => {
        res.json(results.rows)
    })
}


const post = (req, res) => {

    var variant_name = req.body.variant_name;
    var variant_description = req.body.variant_description;
    var business_component_id = req.body.business_component_id;
    var field_values = req.body.field_values;
    var json_string = JSON.stringify(field_values)
    pool.query("insert into sch_ui_variants (variant_name,variant_description,screen_id,field_values ) values ('" + variant_name + "','" + variant_description + "','" + business_component_id + "','" + json_string + "')", (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ "msg": "" + variant_name + " is inserted" })
        }

    })

}

const insert = (req, res) => {
    var variant_name = req.body.variant_name;
    variant_name = variant_name.toLowerCase();
    console.log(variant_name)
    var variant_description = req.body.variant_description;
    var business_component_id = req.body.business_component_id;
    var field_values = req.body.field_values;
    var json_string = JSON.stringify(field_values)

    pool.query("select * from sch_ui_variants where variant_name = $1", [variant_name], (err, results) => {
        if (err) {
            console.log(err)
        }
        if (results.rowCount == 0) {
            pool.query("insert into sch_ui_variants (variant_name,variant_description,business_component_id,field_values ) values ('" + variant_name + "','" + variant_description + "','" + business_component_id + "','" + json_string + "')", (err1, results1) => {
                if (err) {
                    console.log(err1)
                } else {
                    res.json({ "msg": "" + variant_name + " is inserted" })
                }
            })
        } else {
            res.json({ "msg": "" + variant_name + " already exist" })
        }
    })
}

const list_variant = (req, res) => {
    pool.query("select variant_name,variant_id,variant_description from sch_ui_variants", (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.json(results.rows)
        }
    })
}

const select_variant = (req, res) => {
    var variant_name = req.body.variant_name;
    pool.query("select * from sch_ui_variants where variant_name = $1", [variant_name], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.json(results.rows)
        }
    })
}
module.exports = {
    get,
    insert,
    list_variant,
    select_variant
}