'use strict';

require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');

module.exports.handler = async (event, context, callback) => {
  if (event.body) {
    // eslint-disable-next-line
    event = JSON.parse(event.body);
  }

  const dom = await axios.get(event.url);

  const $ = cheerio.load(dom.data);

  const data = {
    image: $('[data-testid="gallery-main"] > a > ul > li > img')
      .attr('srcset')
      .replace(/\d+w\b/g, '')
      .replace(/\s+/g, '')
      .split(',')[0],

    title: $('[data-testid="object-title"] > h1')
      .text()
      .trim(),

    address: $('[data-testid="object-address"]')
      .text()
      .trim(),

    price: $('[data-testid="pricing-incicative-price"] span:last-child')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),

    registrationCharge: $('[data-testid="pricing-registration-charge"] > dd')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),

    commonMonthlyCost: $('[data-testid="pricing-common-monthly-cost"] > dd')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),

    municipalFees: $('[data-testid="pricing-municipal-fees"] > dd')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),

    taxValue: $('[data-testid="pricing-tax-value"] > dd')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),

    propertyType: $('[data-testid="info-property-type"] > dd')
      .text()
      .trim(),

    ownershipType: $('[data-testid="info-ownership-type"] > dd')
      .text()
      .trim(),

    bedrooms: $('[data-testid="info-bedrooms"] > dd')
      .text()
      .trim(),

    primaryArea: $('[data-testid="info-primary-area"] > dd')
      .text()
      .replace(/\D/g, '')
      .trim(),

    usableArea: $('[data-testid="info-usable-area"] > dd')
      .text()
      .replace(/\D/g, '')
      .trim(),

    floor: $('[data-testid="info-floor"] > dd')
      .text()
      .trim(),

    constructionYear: $('[data-testid="info-construction-year"] > dd')
      .text()
      .trim(),

    rooms: $('[data-testid="info-rooms"] > dd')
      .text()
      .trim(),

    plotArea: $('[data-testid="info-plot-area"] > dd')
      .text()
      .replace(/\D/g, '')
      .replace(/\s+/g, '')
      .trim(),
  };


  await callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  });
};
