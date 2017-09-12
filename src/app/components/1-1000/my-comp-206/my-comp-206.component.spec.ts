import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp206Component } from './my-comp-206.component';

describe('MyComp206Component', () => {
  let component: MyComp206Component;
  let fixture: ComponentFixture<MyComp206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
