import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9621Component } from './my-comp-9621.component';

describe('MyComp9621Component', () => {
  let component: MyComp9621Component;
  let fixture: ComponentFixture<MyComp9621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
