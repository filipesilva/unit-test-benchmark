import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4683Component } from './my-comp-4683.component';

describe('MyComp4683Component', () => {
  let component: MyComp4683Component;
  let fixture: ComponentFixture<MyComp4683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
