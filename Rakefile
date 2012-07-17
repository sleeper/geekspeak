require 'rubygems'
require 'bundler'
require 'pathname'
require 'logger'
require 'fileutils'

Bundler.require
require 'coffee-script'
require 'sass'

#ROOT        = Pathname(File.dirname(__FILE__))
#LOGGER      = Logger.new(STDOUT)
#BUNDLES     = %w( application.css.sass application.js )
#BUILD_DIR   = ROOT.join("build")
#SOURCE_DIR  = ROOT.join("src")
#
#task :compile do
#  sprockets = Sprockets::Environment.new(ROOT) do |env|
#    env.logger = LOGGER
#  end
#
#  sprockets.append_path(SOURCE_DIR.join('javascripts').to_s)
#  sprockets.append_path(SOURCE_DIR.join('stylesheets').to_s)
#
#  BUNDLES.each do |bundle|
#    puts "FRED: #{bundle}"
#    assets = sprockets.find_asset(bundle)
#    puts "FRED: #{assets}"
#    prefix, basename = assets.pathname.to_s.split('/')[-2..-1]
#    FileUtils.mkpath BUILD_DIR.join(prefix)
#
#    assets.write_to(BUILD_DIR.join(prefix, basename))
#    assets.to_a.each do |asset|
#      # strip filename.css.foo.bar.css multiple extensions
#      realname = asset.pathname.basename.to_s.split(".")[0..1].join(".")
#      asset.write_to(BUILD_DIR.join(prefix, realname))
#    end
#  end
#end


namespace :js do
  desc "compile coffee-scripts"
  task :compile do
    js = open "#{File.dirname(__FILE__)}/app/js/geekspeak.js", 'w+'
    Dir["#{File.dirname(__FILE__)}/app/coffee/**/*"].each do |cf|
      puts "FRED: Looking at #{cf}"
      if /\.coffee$/ =~ cf
        js.puts CoffeeScript.compile File.read cf
      end
    end
  end
end

namespace :sass do
  desc "compile sass"
  task :compile do
    Dir["#{File.dirname(__FILE__)}/app/sccs/**/*"].each do |cf|
      puts "FRED: Looking at #{cf}"
      if /\.s[ac]ss$/ =~ cf
        scss_content = File.read( cf )
        css_file = cf.sub(/\.s[ac]ss$/, '.css').sub(/\/app\/sccs\//, '/app/css/')
        engine = Sass::Engine.new(scss_content, :syntax => :scss)
        File.open( css_file, "w") {|f| f.puts engine.render }
      end
    end
  end
end
