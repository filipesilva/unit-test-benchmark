import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4482Component } from './my-comp-4482.component';

describe('MyComp4482Component', () => {
  let component: MyComp4482Component;
  let fixture: ComponentFixture<MyComp4482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
