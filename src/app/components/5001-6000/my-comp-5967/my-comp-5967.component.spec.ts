import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5967Component } from './my-comp-5967.component';

describe('MyComp5967Component', () => {
  let component: MyComp5967Component;
  let fixture: ComponentFixture<MyComp5967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
