import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp668Component } from './my-comp-668.component';

describe('MyComp668Component', () => {
  let component: MyComp668Component;
  let fixture: ComponentFixture<MyComp668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
