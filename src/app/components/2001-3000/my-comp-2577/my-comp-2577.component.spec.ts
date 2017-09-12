import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2577Component } from './my-comp-2577.component';

describe('MyComp2577Component', () => {
  let component: MyComp2577Component;
  let fixture: ComponentFixture<MyComp2577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
