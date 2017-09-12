import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9116Component } from './my-comp-9116.component';

describe('MyComp9116Component', () => {
  let component: MyComp9116Component;
  let fixture: ComponentFixture<MyComp9116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
