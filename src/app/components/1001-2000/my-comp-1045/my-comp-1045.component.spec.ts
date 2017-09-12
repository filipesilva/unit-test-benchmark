import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1045Component } from './my-comp-1045.component';

describe('MyComp1045Component', () => {
  let component: MyComp1045Component;
  let fixture: ComponentFixture<MyComp1045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
