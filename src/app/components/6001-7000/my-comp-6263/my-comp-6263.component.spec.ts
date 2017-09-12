import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6263Component } from './my-comp-6263.component';

describe('MyComp6263Component', () => {
  let component: MyComp6263Component;
  let fixture: ComponentFixture<MyComp6263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
