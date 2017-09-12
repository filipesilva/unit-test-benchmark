import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9555Component } from './my-comp-9555.component';

describe('MyComp9555Component', () => {
  let component: MyComp9555Component;
  let fixture: ComponentFixture<MyComp9555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
