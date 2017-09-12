import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9440Component } from './my-comp-9440.component';

describe('MyComp9440Component', () => {
  let component: MyComp9440Component;
  let fixture: ComponentFixture<MyComp9440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
