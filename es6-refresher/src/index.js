import Teacher, { promote } from './teacher';

// Default export -> import ... from '';
// Named export -> import { ... } from '';

// Mismo patrón que en:
// import React, { Component } from 'react';

const teacher = new Teacher('Mosh', 'MSc');
teacher.teach();
promote();
