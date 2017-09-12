import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2630Component } from './my-comp-2630.component';

describe('MyComp2630Component', () => {
  let component: MyComp2630Component;
  let fixture: ComponentFixture<MyComp2630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
