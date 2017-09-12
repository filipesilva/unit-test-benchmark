import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9740Component } from './my-comp-9740.component';

describe('MyComp9740Component', () => {
  let component: MyComp9740Component;
  let fixture: ComponentFixture<MyComp9740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
