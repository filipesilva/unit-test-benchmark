import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9217Component } from './my-comp-9217.component';

describe('MyComp9217Component', () => {
  let component: MyComp9217Component;
  let fixture: ComponentFixture<MyComp9217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
