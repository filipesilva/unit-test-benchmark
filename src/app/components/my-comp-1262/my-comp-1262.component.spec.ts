import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1262Component } from './my-comp-1262.component';

describe('MyComp1262Component', () => {
  let component: MyComp1262Component;
  let fixture: ComponentFixture<MyComp1262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
