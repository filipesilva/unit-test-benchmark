import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7415Component } from './my-comp-7415.component';

describe('MyComp7415Component', () => {
  let component: MyComp7415Component;
  let fixture: ComponentFixture<MyComp7415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
