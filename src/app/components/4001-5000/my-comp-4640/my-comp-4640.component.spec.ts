import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4640Component } from './my-comp-4640.component';

describe('MyComp4640Component', () => {
  let component: MyComp4640Component;
  let fixture: ComponentFixture<MyComp4640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
