import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5069Component } from './my-comp-5069.component';

describe('MyComp5069Component', () => {
  let component: MyComp5069Component;
  let fixture: ComponentFixture<MyComp5069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
