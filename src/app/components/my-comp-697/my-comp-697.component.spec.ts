import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp697Component } from './my-comp-697.component';

describe('MyComp697Component', () => {
  let component: MyComp697Component;
  let fixture: ComponentFixture<MyComp697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
