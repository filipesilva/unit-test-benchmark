import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1121Component } from './my-comp-1121.component';

describe('MyComp1121Component', () => {
  let component: MyComp1121Component;
  let fixture: ComponentFixture<MyComp1121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
