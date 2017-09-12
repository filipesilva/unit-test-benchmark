import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1427Component } from './my-comp-1427.component';

describe('MyComp1427Component', () => {
  let component: MyComp1427Component;
  let fixture: ComponentFixture<MyComp1427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
