import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp482Component } from './my-comp-482.component';

describe('MyComp482Component', () => {
  let component: MyComp482Component;
  let fixture: ComponentFixture<MyComp482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
