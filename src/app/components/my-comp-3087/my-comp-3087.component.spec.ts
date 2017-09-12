import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3087Component } from './my-comp-3087.component';

describe('MyComp3087Component', () => {
  let component: MyComp3087Component;
  let fixture: ComponentFixture<MyComp3087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
