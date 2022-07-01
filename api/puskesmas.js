const {createClient} = require('@supabase/supabase-js')

const SUPABASE_KEY = PROCESS.ENV.SUPABASE_KEY
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const add = async (req, res) => {
    try { 
        const {namaPuskesamas, alamatPuskesamas, noTelepon, maps, poli, denah, foto} = req.query
        const { data, error } = await supabase
            .from('puskesmas')
            .insert({ namaPuskesamas, alamatPuskesamas, noTelepon, maps, poli, denah, foto })
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
            .from('puskesmas')
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
            .from('puskesmas')
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
        const {namaPuskesamas, alamatPuskesamas, noTelepon, maps, poli, denah, foto, id} = req.query
        const { data, error } = await supabase
            .from('puskesmas')
            .update({ namaPuskesamas, alamatPuskesamas, noTelepon, maps, poli, denah, foto })
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