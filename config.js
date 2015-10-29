var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/alternate_universes';

module.exports = connectionString;