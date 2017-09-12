import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1064Component } from './my-comp-1064.component';

describe('MyComp1064Component', () => {
  let component: MyComp1064Component;
  let fixture: ComponentFixture<MyComp1064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
