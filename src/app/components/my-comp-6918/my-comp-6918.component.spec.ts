import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6918Component } from './my-comp-6918.component';

describe('MyComp6918Component', () => {
  let component: MyComp6918Component;
  let fixture: ComponentFixture<MyComp6918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
