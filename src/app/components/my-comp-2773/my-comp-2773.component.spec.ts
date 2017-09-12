import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2773Component } from './my-comp-2773.component';

describe('MyComp2773Component', () => {
  let component: MyComp2773Component;
  let fixture: ComponentFixture<MyComp2773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
