import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6864Component } from './my-comp-6864.component';

describe('MyComp6864Component', () => {
  let component: MyComp6864Component;
  let fixture: ComponentFixture<MyComp6864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
