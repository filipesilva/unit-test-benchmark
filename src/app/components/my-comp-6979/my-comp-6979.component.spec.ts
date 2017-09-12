import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6979Component } from './my-comp-6979.component';

describe('MyComp6979Component', () => {
  let component: MyComp6979Component;
  let fixture: ComponentFixture<MyComp6979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
