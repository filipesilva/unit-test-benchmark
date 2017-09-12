import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1026Component } from './my-comp-1026.component';

describe('MyComp1026Component', () => {
  let component: MyComp1026Component;
  let fixture: ComponentFixture<MyComp1026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
