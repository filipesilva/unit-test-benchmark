import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1398Component } from './my-comp-1398.component';

describe('MyComp1398Component', () => {
  let component: MyComp1398Component;
  let fixture: ComponentFixture<MyComp1398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
