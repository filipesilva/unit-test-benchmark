import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6660Component } from './my-comp-6660.component';

describe('MyComp6660Component', () => {
  let component: MyComp6660Component;
  let fixture: ComponentFixture<MyComp6660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
