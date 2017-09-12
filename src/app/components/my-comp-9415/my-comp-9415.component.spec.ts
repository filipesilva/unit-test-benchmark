import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9415Component } from './my-comp-9415.component';

describe('MyComp9415Component', () => {
  let component: MyComp9415Component;
  let fixture: ComponentFixture<MyComp9415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
