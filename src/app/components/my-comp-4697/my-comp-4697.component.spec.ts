import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4697Component } from './my-comp-4697.component';

describe('MyComp4697Component', () => {
  let component: MyComp4697Component;
  let fixture: ComponentFixture<MyComp4697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
