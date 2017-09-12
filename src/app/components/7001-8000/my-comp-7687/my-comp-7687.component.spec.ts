import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7687Component } from './my-comp-7687.component';

describe('MyComp7687Component', () => {
  let component: MyComp7687Component;
  let fixture: ComponentFixture<MyComp7687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
