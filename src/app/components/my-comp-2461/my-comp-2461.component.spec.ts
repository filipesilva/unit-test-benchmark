import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2461Component } from './my-comp-2461.component';

describe('MyComp2461Component', () => {
  let component: MyComp2461Component;
  let fixture: ComponentFixture<MyComp2461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
