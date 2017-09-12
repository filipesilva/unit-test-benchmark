import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9575Component } from './my-comp-9575.component';

describe('MyComp9575Component', () => {
  let component: MyComp9575Component;
  let fixture: ComponentFixture<MyComp9575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
