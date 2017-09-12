import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9152Component } from './my-comp-9152.component';

describe('MyComp9152Component', () => {
  let component: MyComp9152Component;
  let fixture: ComponentFixture<MyComp9152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
