import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5674Component } from './my-comp-5674.component';

describe('MyComp5674Component', () => {
  let component: MyComp5674Component;
  let fixture: ComponentFixture<MyComp5674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
