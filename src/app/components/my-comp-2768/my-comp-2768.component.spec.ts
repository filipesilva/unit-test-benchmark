import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2768Component } from './my-comp-2768.component';

describe('MyComp2768Component', () => {
  let component: MyComp2768Component;
  let fixture: ComponentFixture<MyComp2768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
