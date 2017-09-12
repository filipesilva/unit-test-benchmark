import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5182Component } from './my-comp-5182.component';

describe('MyComp5182Component', () => {
  let component: MyComp5182Component;
  let fixture: ComponentFixture<MyComp5182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
