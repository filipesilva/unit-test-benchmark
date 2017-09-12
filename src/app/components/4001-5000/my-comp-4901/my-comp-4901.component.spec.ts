import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4901Component } from './my-comp-4901.component';

describe('MyComp4901Component', () => {
  let component: MyComp4901Component;
  let fixture: ComponentFixture<MyComp4901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
