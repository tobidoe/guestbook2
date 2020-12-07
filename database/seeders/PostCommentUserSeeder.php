<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Database\Seeder;

class PostCommentUserSeeder extends Seeder
{
    //generates and stores 20 posts, each with 1 user and 0-6 comments
    public function run()
    {
        for ($i = 1; $i < 20; $i++) {
            $post_id = Post::factory()->create()->id;
            for ($j = 1; $j < rand(1, 7); $j++) {
                Comment::factory()->create(['post_id' => $post_id]);
            }
        }
    }
}
