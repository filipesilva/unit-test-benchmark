import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8267Component } from './my-comp-8267.component';

describe('MyComp8267Component', () => {
  let component: MyComp8267Component;
  let fixture: ComponentFixture<MyComp8267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
