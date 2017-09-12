import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2683Component } from './my-comp-2683.component';

describe('MyComp2683Component', () => {
  let component: MyComp2683Component;
  let fixture: ComponentFixture<MyComp2683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
