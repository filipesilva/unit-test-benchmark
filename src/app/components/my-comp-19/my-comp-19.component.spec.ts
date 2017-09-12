import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp19Component } from './my-comp-19.component';

describe('MyComp19Component', () => {
  let component: MyComp19Component;
  let fixture: ComponentFixture<MyComp19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
