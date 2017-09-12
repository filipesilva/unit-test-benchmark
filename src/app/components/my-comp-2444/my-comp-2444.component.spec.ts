import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2444Component } from './my-comp-2444.component';

describe('MyComp2444Component', () => {
  let component: MyComp2444Component;
  let fixture: ComponentFixture<MyComp2444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
