import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp304Component } from './my-comp-304.component';

describe('MyComp304Component', () => {
  let component: MyComp304Component;
  let fixture: ComponentFixture<MyComp304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
