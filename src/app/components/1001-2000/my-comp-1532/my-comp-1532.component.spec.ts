import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1532Component } from './my-comp-1532.component';

describe('MyComp1532Component', () => {
  let component: MyComp1532Component;
  let fixture: ComponentFixture<MyComp1532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
