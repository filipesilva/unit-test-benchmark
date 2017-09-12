import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6921Component } from './my-comp-6921.component';

describe('MyComp6921Component', () => {
  let component: MyComp6921Component;
  let fixture: ComponentFixture<MyComp6921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
