import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6415Component } from './my-comp-6415.component';

describe('MyComp6415Component', () => {
  let component: MyComp6415Component;
  let fixture: ComponentFixture<MyComp6415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
