import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2142Component } from './my-comp-2142.component';

describe('MyComp2142Component', () => {
  let component: MyComp2142Component;
  let fixture: ComponentFixture<MyComp2142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
