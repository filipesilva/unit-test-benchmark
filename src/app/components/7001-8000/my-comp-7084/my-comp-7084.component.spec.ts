import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7084Component } from './my-comp-7084.component';

describe('MyComp7084Component', () => {
  let component: MyComp7084Component;
  let fixture: ComponentFixture<MyComp7084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
