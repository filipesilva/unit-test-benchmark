import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp471Component } from './my-comp-471.component';

describe('MyComp471Component', () => {
  let component: MyComp471Component;
  let fixture: ComponentFixture<MyComp471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
