import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6136Component } from './my-comp-6136.component';

describe('MyComp6136Component', () => {
  let component: MyComp6136Component;
  let fixture: ComponentFixture<MyComp6136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
