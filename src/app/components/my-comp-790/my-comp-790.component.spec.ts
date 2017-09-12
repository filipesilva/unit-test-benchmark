import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp790Component } from './my-comp-790.component';

describe('MyComp790Component', () => {
  let component: MyComp790Component;
  let fixture: ComponentFixture<MyComp790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
