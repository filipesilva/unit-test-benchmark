import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp113Component } from './my-comp-113.component';

describe('MyComp113Component', () => {
  let component: MyComp113Component;
  let fixture: ComponentFixture<MyComp113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
