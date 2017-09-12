import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9770Component } from './my-comp-9770.component';

describe('MyComp9770Component', () => {
  let component: MyComp9770Component;
  let fixture: ComponentFixture<MyComp9770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
