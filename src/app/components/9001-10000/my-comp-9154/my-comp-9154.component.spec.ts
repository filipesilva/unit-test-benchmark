import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9154Component } from './my-comp-9154.component';

describe('MyComp9154Component', () => {
  let component: MyComp9154Component;
  let fixture: ComponentFixture<MyComp9154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
