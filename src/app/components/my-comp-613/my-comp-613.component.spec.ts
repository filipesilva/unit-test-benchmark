import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp613Component } from './my-comp-613.component';

describe('MyComp613Component', () => {
  let component: MyComp613Component;
  let fixture: ComponentFixture<MyComp613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
