import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp536Component } from './my-comp-536.component';

describe('MyComp536Component', () => {
  let component: MyComp536Component;
  let fixture: ComponentFixture<MyComp536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
