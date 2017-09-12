import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4786Component } from './my-comp-4786.component';

describe('MyComp4786Component', () => {
  let component: MyComp4786Component;
  let fixture: ComponentFixture<MyComp4786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
