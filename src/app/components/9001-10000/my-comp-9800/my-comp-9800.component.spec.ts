import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9800Component } from './my-comp-9800.component';

describe('MyComp9800Component', () => {
  let component: MyComp9800Component;
  let fixture: ComponentFixture<MyComp9800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
