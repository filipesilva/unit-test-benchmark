import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1142Component } from './my-comp-1142.component';

describe('MyComp1142Component', () => {
  let component: MyComp1142Component;
  let fixture: ComponentFixture<MyComp1142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
