import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1374Component } from './my-comp-1374.component';

describe('MyComp1374Component', () => {
  let component: MyComp1374Component;
  let fixture: ComponentFixture<MyComp1374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
