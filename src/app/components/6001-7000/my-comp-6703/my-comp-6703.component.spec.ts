import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6703Component } from './my-comp-6703.component';

describe('MyComp6703Component', () => {
  let component: MyComp6703Component;
  let fixture: ComponentFixture<MyComp6703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
