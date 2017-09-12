import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2811Component } from './my-comp-2811.component';

describe('MyComp2811Component', () => {
  let component: MyComp2811Component;
  let fixture: ComponentFixture<MyComp2811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
