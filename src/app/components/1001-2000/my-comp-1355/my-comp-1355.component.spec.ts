import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1355Component } from './my-comp-1355.component';

describe('MyComp1355Component', () => {
  let component: MyComp1355Component;
  let fixture: ComponentFixture<MyComp1355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
