import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4409Component } from './my-comp-4409.component';

describe('MyComp4409Component', () => {
  let component: MyComp4409Component;
  let fixture: ComponentFixture<MyComp4409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
