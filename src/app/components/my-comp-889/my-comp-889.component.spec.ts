import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp889Component } from './my-comp-889.component';

describe('MyComp889Component', () => {
  let component: MyComp889Component;
  let fixture: ComponentFixture<MyComp889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
