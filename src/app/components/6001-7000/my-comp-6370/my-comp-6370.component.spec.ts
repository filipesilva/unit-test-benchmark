import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6370Component } from './my-comp-6370.component';

describe('MyComp6370Component', () => {
  let component: MyComp6370Component;
  let fixture: ComponentFixture<MyComp6370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
