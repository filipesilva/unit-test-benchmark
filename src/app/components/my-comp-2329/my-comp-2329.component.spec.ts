import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2329Component } from './my-comp-2329.component';

describe('MyComp2329Component', () => {
  let component: MyComp2329Component;
  let fixture: ComponentFixture<MyComp2329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
