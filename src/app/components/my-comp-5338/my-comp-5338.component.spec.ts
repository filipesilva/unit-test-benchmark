import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5338Component } from './my-comp-5338.component';

describe('MyComp5338Component', () => {
  let component: MyComp5338Component;
  let fixture: ComponentFixture<MyComp5338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
