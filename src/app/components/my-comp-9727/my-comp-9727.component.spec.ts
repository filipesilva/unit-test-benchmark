import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9727Component } from './my-comp-9727.component';

describe('MyComp9727Component', () => {
  let component: MyComp9727Component;
  let fixture: ComponentFixture<MyComp9727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
