import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7094Component } from './my-comp-7094.component';

describe('MyComp7094Component', () => {
  let component: MyComp7094Component;
  let fixture: ComponentFixture<MyComp7094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
