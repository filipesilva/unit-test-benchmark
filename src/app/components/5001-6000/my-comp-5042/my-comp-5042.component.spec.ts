import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5042Component } from './my-comp-5042.component';

describe('MyComp5042Component', () => {
  let component: MyComp5042Component;
  let fixture: ComponentFixture<MyComp5042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
