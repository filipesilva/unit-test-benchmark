import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4750Component } from './my-comp-4750.component';

describe('MyComp4750Component', () => {
  let component: MyComp4750Component;
  let fixture: ComponentFixture<MyComp4750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
