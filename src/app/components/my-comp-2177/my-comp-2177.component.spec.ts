import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2177Component } from './my-comp-2177.component';

describe('MyComp2177Component', () => {
  let component: MyComp2177Component;
  let fixture: ComponentFixture<MyComp2177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
