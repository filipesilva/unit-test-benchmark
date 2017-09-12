import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1535Component } from './my-comp-1535.component';

describe('MyComp1535Component', () => {
  let component: MyComp1535Component;
  let fixture: ComponentFixture<MyComp1535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
