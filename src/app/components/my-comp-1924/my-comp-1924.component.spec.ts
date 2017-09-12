import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1924Component } from './my-comp-1924.component';

describe('MyComp1924Component', () => {
  let component: MyComp1924Component;
  let fixture: ComponentFixture<MyComp1924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
