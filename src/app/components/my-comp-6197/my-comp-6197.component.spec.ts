import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6197Component } from './my-comp-6197.component';

describe('MyComp6197Component', () => {
  let component: MyComp6197Component;
  let fixture: ComponentFixture<MyComp6197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
