import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9107Component } from './my-comp-9107.component';

describe('MyComp9107Component', () => {
  let component: MyComp9107Component;
  let fixture: ComponentFixture<MyComp9107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
