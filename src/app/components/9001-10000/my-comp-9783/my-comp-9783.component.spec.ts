import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9783Component } from './my-comp-9783.component';

describe('MyComp9783Component', () => {
  let component: MyComp9783Component;
  let fixture: ComponentFixture<MyComp9783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
