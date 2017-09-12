import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2896Component } from './my-comp-2896.component';

describe('MyComp2896Component', () => {
  let component: MyComp2896Component;
  let fixture: ComponentFixture<MyComp2896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
