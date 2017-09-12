import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4375Component } from './my-comp-4375.component';

describe('MyComp4375Component', () => {
  let component: MyComp4375Component;
  let fixture: ComponentFixture<MyComp4375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
