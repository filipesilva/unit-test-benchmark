import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6622Component } from './my-comp-6622.component';

describe('MyComp6622Component', () => {
  let component: MyComp6622Component;
  let fixture: ComponentFixture<MyComp6622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
