import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7338Component } from './my-comp-7338.component';

describe('MyComp7338Component', () => {
  let component: MyComp7338Component;
  let fixture: ComponentFixture<MyComp7338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
