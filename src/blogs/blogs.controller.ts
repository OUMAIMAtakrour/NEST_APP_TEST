import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
    @Get()
    findAll(@Query('sort') sort: 'asc'|'desc'='desc'){
        return 'all blogs';
    }
    @Get('featured')
    findFeatured(){
        return 'featured blogs';
    }
    @Get(':id')
    findOne(@Param()id:string){
        console.log(id);
       return 'one blog';
    }

    @Post()
    create(@Body() input:any){
      return   'blog created with success';
    }
}   
