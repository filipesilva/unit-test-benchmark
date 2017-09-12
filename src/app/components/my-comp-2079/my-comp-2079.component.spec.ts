import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2079Component } from './my-comp-2079.component';

describe('MyComp2079Component', () => {
  let component: MyComp2079Component;
  let fixture: ComponentFixture<MyComp2079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
