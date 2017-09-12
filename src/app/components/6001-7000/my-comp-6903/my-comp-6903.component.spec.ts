import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6903Component } from './my-comp-6903.component';

describe('MyComp6903Component', () => {
  let component: MyComp6903Component;
  let fixture: ComponentFixture<MyComp6903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
