class CredRepo {
    constructor(model) {
        if (!model) {
            console.log("no model")
        }
        this.model = model
    }

    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async destroy(data) {
        try {
            const res = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return res;

        } catch (error) {
            throw error;
        }
    }
    async get(data) { 
        try {
            const res = await this.model.findByPk(data);
            return res;

        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const res = await this.model.findAll();
            return res;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = CredRepo