import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2303Component } from './my-comp-2303.component';

describe('MyComp2303Component', () => {
  let component: MyComp2303Component;
  let fixture: ComponentFixture<MyComp2303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
