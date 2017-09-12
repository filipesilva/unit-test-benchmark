import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1319Component } from './my-comp-1319.component';

describe('MyComp1319Component', () => {
  let component: MyComp1319Component;
  let fixture: ComponentFixture<MyComp1319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
