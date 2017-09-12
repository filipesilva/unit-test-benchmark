import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp555Component } from './my-comp-555.component';

describe('MyComp555Component', () => {
  let component: MyComp555Component;
  let fixture: ComponentFixture<MyComp555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
