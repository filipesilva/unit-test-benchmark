import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4864Component } from './my-comp-4864.component';

describe('MyComp4864Component', () => {
  let component: MyComp4864Component;
  let fixture: ComponentFixture<MyComp4864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
