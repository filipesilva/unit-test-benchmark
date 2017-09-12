import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1030Component } from './my-comp-1030.component';

describe('MyComp1030Component', () => {
  let component: MyComp1030Component;
  let fixture: ComponentFixture<MyComp1030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
