import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9335Component } from './my-comp-9335.component';

describe('MyComp9335Component', () => {
  let component: MyComp9335Component;
  let fixture: ComponentFixture<MyComp9335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
