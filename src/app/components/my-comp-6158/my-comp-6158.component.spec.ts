import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6158Component } from './my-comp-6158.component';

describe('MyComp6158Component', () => {
  let component: MyComp6158Component;
  let fixture: ComponentFixture<MyComp6158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
