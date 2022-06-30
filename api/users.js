<<<<<<< HEAD:api/users.js
const {createClient} = require('@supabase/supabase-js')

//const SUPABASE_KEY = PROCESS.ENV.SUPABASE_KEY
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdGJ5dGFydnhsZnJrZ21mYXFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjI1NDE5MiwiZXhwIjoxOTcxODMwMTkyfQ.wrpDg8IdI9Q_Fd0Qu3xh2BVmKY8SYl7khhwfJhViIVs"
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const add = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone} = req.query
        const { data, error } = await supabase
            .from('users')
            .insert([
                { tax, poli, date, location, name, nik, address, handphone },
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
=======
const {createClient} = require('@supabase/supabase-js')

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdGJ5dGFydnhsZnJrZ21mYXFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjI1NDE5MiwiZXhwIjoxOTcxODMwMTkyfQ.wrpDg8IdI9Q_Fd0Qu3xh2BVmKY8SYl7khhwfJhViIVs"
const SUPABASE_URL = "https://pdtbytarvxlfrkgmfaqq.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const add = async (req, res) => {
    try { 
        const {tax, poli, date, location, name, nik, address, handphone} = req.query
        const { data, error } = await supabase
            .from('users')
            .insert([
                { tax, poli, date, location, name, nik, address, handphone },
        ])
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const daftar = async (req, res) => {
    try { 
        const {email, password, role} = req.query
        const { data, error } = await supabase
            .from('login')
            .insert([
                { email, password, role },
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
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
        if (error) {
            return res.json(error)
        }

        res.json(users)
    } catch (error) {
        return res.json(error)
    }    
}

const listlogin = async (req, res) => {
    try { 
        const { data, error } = await supabase
            .from('login')
            .select('id, email, password, role')
        if (error) {
            return res.json(error)
        }

        res.json(data)
    } catch (error) {
        return res.json(error)
    }    
}

const login = async (req, res) => {
    try { 
        const {email, password, role} = req.query
        const { user, error } = await supabase.auth.signIn({
            email: 'someone@email.com',
            password: 'OOrwKRJMYSAPLyhAMnBL'
          })
        
        res.json(user)
    } catch (error) {
        return res.json(error)
    }    
}

module.exports = {
    add, daftar, hapus, list, listlogin, login
>>>>>>> 8aebd91a3d2a29b48ca5c0928104041dfbe809d0:api/gabungan.js
}