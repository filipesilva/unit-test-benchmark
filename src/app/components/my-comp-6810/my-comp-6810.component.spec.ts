import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6810Component } from './my-comp-6810.component';

describe('MyComp6810Component', () => {
  let component: MyComp6810Component;
  let fixture: ComponentFixture<MyComp6810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
