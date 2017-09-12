import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9432Component } from './my-comp-9432.component';

describe('MyComp9432Component', () => {
  let component: MyComp9432Component;
  let fixture: ComponentFixture<MyComp9432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
