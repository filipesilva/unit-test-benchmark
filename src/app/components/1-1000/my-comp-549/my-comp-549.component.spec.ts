import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp549Component } from './my-comp-549.component';

describe('MyComp549Component', () => {
  let component: MyComp549Component;
  let fixture: ComponentFixture<MyComp549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
