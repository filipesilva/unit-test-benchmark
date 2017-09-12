import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9683Component } from './my-comp-9683.component';

describe('MyComp9683Component', () => {
  let component: MyComp9683Component;
  let fixture: ComponentFixture<MyComp9683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
