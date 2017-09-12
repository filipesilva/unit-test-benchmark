import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5211Component } from './my-comp-5211.component';

describe('MyComp5211Component', () => {
  let component: MyComp5211Component;
  let fixture: ComponentFixture<MyComp5211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
