import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5775Component } from './my-comp-5775.component';

describe('MyComp5775Component', () => {
  let component: MyComp5775Component;
  let fixture: ComponentFixture<MyComp5775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
