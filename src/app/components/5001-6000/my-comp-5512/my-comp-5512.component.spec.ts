import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5512Component } from './my-comp-5512.component';

describe('MyComp5512Component', () => {
  let component: MyComp5512Component;
  let fixture: ComponentFixture<MyComp5512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
