import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9823Component } from './my-comp-9823.component';

describe('MyComp9823Component', () => {
  let component: MyComp9823Component;
  let fixture: ComponentFixture<MyComp9823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
