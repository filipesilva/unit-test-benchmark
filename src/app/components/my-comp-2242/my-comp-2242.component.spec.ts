import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2242Component } from './my-comp-2242.component';

describe('MyComp2242Component', () => {
  let component: MyComp2242Component;
  let fixture: ComponentFixture<MyComp2242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
