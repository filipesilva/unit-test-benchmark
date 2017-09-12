import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9737Component } from './my-comp-9737.component';

describe('MyComp9737Component', () => {
  let component: MyComp9737Component;
  let fixture: ComponentFixture<MyComp9737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
