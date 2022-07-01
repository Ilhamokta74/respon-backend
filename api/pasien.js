const {createClient} = require('@supabase/supabase-js')

const SUPABASE_KEY = PROCESS.ENV.SUPABASE_KEY
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const add = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone, tanggal} = req.query
        const { data, error } = await supabase
            .from('users')
            .insert([
                { tax, poli, date, location, name, nik, address, handphone, tanggal },
        ])
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const hapus = async (req, res) => {
    try { 
        const {id} = req.query
        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', id)
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const list = async (req, res) => {
    try { 
        const { data, error } = await supabase
            .from('users')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const update = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone, id} = req.query
        const { data, error } = await supabase
            .from('users')
            .update({ tax, poli, date, location, name, nik, address, handphone })
            .eq('id', id)
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

module.exports = {
    add, hapus, list, update
}