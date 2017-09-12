import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1092Component } from './my-comp-1092.component';

describe('MyComp1092Component', () => {
  let component: MyComp1092Component;
  let fixture: ComponentFixture<MyComp1092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
