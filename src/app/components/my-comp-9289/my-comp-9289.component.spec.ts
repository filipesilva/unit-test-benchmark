import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9289Component } from './my-comp-9289.component';

describe('MyComp9289Component', () => {
  let component: MyComp9289Component;
  let fixture: ComponentFixture<MyComp9289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
