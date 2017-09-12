import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5033Component } from './my-comp-5033.component';

describe('MyComp5033Component', () => {
  let component: MyComp5033Component;
  let fixture: ComponentFixture<MyComp5033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
