import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp248Component } from './my-comp-248.component';

describe('MyComp248Component', () => {
  let component: MyComp248Component;
  let fixture: ComponentFixture<MyComp248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
