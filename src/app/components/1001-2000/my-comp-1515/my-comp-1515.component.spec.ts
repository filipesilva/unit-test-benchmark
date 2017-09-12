import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1515Component } from './my-comp-1515.component';

describe('MyComp1515Component', () => {
  let component: MyComp1515Component;
  let fixture: ComponentFixture<MyComp1515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
