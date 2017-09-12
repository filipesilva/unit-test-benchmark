import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2727Component } from './my-comp-2727.component';

describe('MyComp2727Component', () => {
  let component: MyComp2727Component;
  let fixture: ComponentFixture<MyComp2727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
