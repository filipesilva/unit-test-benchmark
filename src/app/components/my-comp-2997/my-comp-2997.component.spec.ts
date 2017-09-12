import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2997Component } from './my-comp-2997.component';

describe('MyComp2997Component', () => {
  let component: MyComp2997Component;
  let fixture: ComponentFixture<MyComp2997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
