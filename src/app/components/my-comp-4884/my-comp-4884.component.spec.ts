import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4884Component } from './my-comp-4884.component';

describe('MyComp4884Component', () => {
  let component: MyComp4884Component;
  let fixture: ComponentFixture<MyComp4884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
