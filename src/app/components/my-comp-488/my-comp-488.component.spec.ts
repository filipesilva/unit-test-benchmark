import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp488Component } from './my-comp-488.component';

describe('MyComp488Component', () => {
  let component: MyComp488Component;
  let fixture: ComponentFixture<MyComp488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
