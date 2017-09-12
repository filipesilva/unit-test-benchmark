import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9514Component } from './my-comp-9514.component';

describe('MyComp9514Component', () => {
  let component: MyComp9514Component;
  let fixture: ComponentFixture<MyComp9514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
