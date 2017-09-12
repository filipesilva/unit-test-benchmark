import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1701Component } from './my-comp-1701.component';

describe('MyComp1701Component', () => {
  let component: MyComp1701Component;
  let fixture: ComponentFixture<MyComp1701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
