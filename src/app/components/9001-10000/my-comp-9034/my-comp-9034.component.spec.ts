import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9034Component } from './my-comp-9034.component';

describe('MyComp9034Component', () => {
  let component: MyComp9034Component;
  let fixture: ComponentFixture<MyComp9034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
