import React, { useEffect, useState } from 'react';
import { Grid, Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const articleLinks = [
  "https://phys.org/news/2025-06-scientists-precision-quantum-defects-diamond.html#google_vignette",
  "https://www.azoquantum.com/News.aspx?newsID=10835",
  "https://www.ox.ac.uk/news/2025-06-16-new-breakthrough-enables-precise-activation-quantum-features-diamond",
  "https://www.iom3.org/resource/quantum-defects-in-diamond-precisely-fabricated.html",
  "https://www.eurekalert.org/news-releases/1087333",
  "https://www.oxfordmail.co.uk/news/25268226.new-laser-technology-pave-way-quantum-computers/",
  "https://interestingengineering.com/science/scientists-monitor-quantum-defects-real-time"
  // Add more URLs as needed
];

const Media = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchMetadata() {
      const results = await Promise.all(
        articleLinks.map(async (url) => {
          try {
            const res = await fetch(
              `https://api.microlink.io?url=${encodeURIComponent(url)}`
            );
            const json = await res.json();
            return {
              url,
              title: json.data.title,
              source: json.data.publisher,
              image: json.data.image?.url,
              date: json.data.date || "—"
            };
          } catch (e) {
            return { url, title: "Link", source: "Unknown", image: null, date: "—" };
          }
        })
      );
      setArticles(results);
    }
    fetchMetadata();
  }, []);

  return (
    <Grid container mt={80} ml={20} mr={20}>
    <Box sx={{ p: 4 }}>
      {/* <Typography variant="h5" gutterBottom> */}
        {/* A collection of articles in the media regarding my collaborative work */}
      {/* </Typography> */}

      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  pt: 2 // top padding
                }}
              >
                {article.image && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={article.image}
                    alt={article.title}
                  />
                )}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {article.source} — {article.date}
                  </Typography>
                  <Typography variant="h6">{article.title}</Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Grid>
  );
}

export default Media;
