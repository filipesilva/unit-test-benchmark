import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5758Component } from './my-comp-5758.component';

describe('MyComp5758Component', () => {
  let component: MyComp5758Component;
  let fixture: ComponentFixture<MyComp5758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
