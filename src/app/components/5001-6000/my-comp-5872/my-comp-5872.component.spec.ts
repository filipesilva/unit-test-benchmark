import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5872Component } from './my-comp-5872.component';

describe('MyComp5872Component', () => {
  let component: MyComp5872Component;
  let fixture: ComponentFixture<MyComp5872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
