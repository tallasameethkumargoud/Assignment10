const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const cors = require("cors");

const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Add routes or other middleware
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Example endpoint to retrieve companies with image paths
app.get('/api/companies', (req, res) => {
    const companies = [
        { name: "Amazon", image: "/uploads/amazon.jpeg" },
        { name: "dell", image: "/uploads/dell.png" },
        { name: "Amazon", image: "/uploads/facebook.png" },
        { name: "dell", image: "/uploads/hp.png" },
        { name: "Amazon", image: "/uploads/wellsforgo.jpeg" },
        { name: "dell", image: "/uploads/tesla.png" }
    ];
    res.status(200).json(companies);
});


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'API for managing user data',
        },
        servers: [{ url: 'http://localhost:5000' }],
    },
    apis: ['./routes/*.js'], // files containing Swagger annotations
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

mongoose.connect('mongodb://localhost/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/user', userRoutes);

app.use('/Job', jobRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
