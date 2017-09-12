import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5734Component } from './my-comp-5734.component';

describe('MyComp5734Component', () => {
  let component: MyComp5734Component;
  let fixture: ComponentFixture<MyComp5734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
