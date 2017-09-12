import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1415Component } from './my-comp-1415.component';

describe('MyComp1415Component', () => {
  let component: MyComp1415Component;
  let fixture: ComponentFixture<MyComp1415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
