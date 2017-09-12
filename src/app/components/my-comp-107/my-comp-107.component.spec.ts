import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp107Component } from './my-comp-107.component';

describe('MyComp107Component', () => {
  let component: MyComp107Component;
  let fixture: ComponentFixture<MyComp107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
