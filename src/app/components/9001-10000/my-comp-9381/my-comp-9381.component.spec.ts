import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9381Component } from './my-comp-9381.component';

describe('MyComp9381Component', () => {
  let component: MyComp9381Component;
  let fixture: ComponentFixture<MyComp9381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
