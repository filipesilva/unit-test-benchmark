import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1171Component } from './my-comp-1171.component';

describe('MyComp1171Component', () => {
  let component: MyComp1171Component;
  let fixture: ComponentFixture<MyComp1171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
