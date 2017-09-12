import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2491Component } from './my-comp-2491.component';

describe('MyComp2491Component', () => {
  let component: MyComp2491Component;
  let fixture: ComponentFixture<MyComp2491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
