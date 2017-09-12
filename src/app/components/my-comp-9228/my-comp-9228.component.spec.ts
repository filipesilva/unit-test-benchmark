import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9228Component } from './my-comp-9228.component';

describe('MyComp9228Component', () => {
  let component: MyComp9228Component;
  let fixture: ComponentFixture<MyComp9228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
