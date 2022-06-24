import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewsCard({title,description,image,url}) {
  return (
    <Card style={
        {
          marginBottom: "30px",
            width: '400px',
        }
    }>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{
            marginLeft: '150px',
        }} 
          onClick={() => {
            window.location.href = url;
          }}
        size="small">View</Button>
      </CardActions>
    </Card>
  );
}
