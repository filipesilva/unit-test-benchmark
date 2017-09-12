import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5239Component } from './my-comp-5239.component';

describe('MyComp5239Component', () => {
  let component: MyComp5239Component;
  let fixture: ComponentFixture<MyComp5239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
