import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9689Component } from './my-comp-9689.component';

describe('MyComp9689Component', () => {
  let component: MyComp9689Component;
  let fixture: ComponentFixture<MyComp9689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
