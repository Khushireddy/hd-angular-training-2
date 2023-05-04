import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListScreenComponent } from './blog-list-screen.component';

describe('BlogListScreenComponent', () => {
  let component: BlogListScreenComponent;
  let fixture: ComponentFixture<BlogListScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
