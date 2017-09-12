import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp687Component } from './my-comp-687.component';

describe('MyComp687Component', () => {
  let component: MyComp687Component;
  let fixture: ComponentFixture<MyComp687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
