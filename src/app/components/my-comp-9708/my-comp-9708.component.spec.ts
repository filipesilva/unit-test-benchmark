import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9708Component } from './my-comp-9708.component';

describe('MyComp9708Component', () => {
  let component: MyComp9708Component;
  let fixture: ComponentFixture<MyComp9708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
