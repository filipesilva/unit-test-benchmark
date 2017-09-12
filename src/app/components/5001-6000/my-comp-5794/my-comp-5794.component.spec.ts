import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5794Component } from './my-comp-5794.component';

describe('MyComp5794Component', () => {
  let component: MyComp5794Component;
  let fixture: ComponentFixture<MyComp5794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
