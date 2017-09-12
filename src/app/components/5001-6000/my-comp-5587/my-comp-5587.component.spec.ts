import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5587Component } from './my-comp-5587.component';

describe('MyComp5587Component', () => {
  let component: MyComp5587Component;
  let fixture: ComponentFixture<MyComp5587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
