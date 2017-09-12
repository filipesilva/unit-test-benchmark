import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1221Component } from './my-comp-1221.component';

describe('MyComp1221Component', () => {
  let component: MyComp1221Component;
  let fixture: ComponentFixture<MyComp1221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
