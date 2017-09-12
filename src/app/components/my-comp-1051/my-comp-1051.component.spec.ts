import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1051Component } from './my-comp-1051.component';

describe('MyComp1051Component', () => {
  let component: MyComp1051Component;
  let fixture: ComponentFixture<MyComp1051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
