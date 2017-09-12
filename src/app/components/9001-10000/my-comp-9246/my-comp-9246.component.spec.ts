import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9246Component } from './my-comp-9246.component';

describe('MyComp9246Component', () => {
  let component: MyComp9246Component;
  let fixture: ComponentFixture<MyComp9246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
