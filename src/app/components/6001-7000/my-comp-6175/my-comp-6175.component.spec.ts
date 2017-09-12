import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6175Component } from './my-comp-6175.component';

describe('MyComp6175Component', () => {
  let component: MyComp6175Component;
  let fixture: ComponentFixture<MyComp6175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
